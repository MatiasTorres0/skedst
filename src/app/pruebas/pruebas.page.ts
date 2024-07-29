import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Observable, forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { IonModal } from '@ionic/angular';

interface MediaItem {
  url: string;
  type: 'image' | 'video' | 'document';
  name: string;
}

@Component({
  selector: 'Skedst-pruebas',
  templateUrl: './pruebas.page.html',
  styleUrls: ['./pruebas.page.scss'],
})
export class PruebasPage implements OnInit {
  @ViewChild('mediaModal') mediaModal!: IonModal;

  selectedFiles: File[] = [];
  mediaItems: MediaItem[] = [];
  uploadProgress: { [key: string]: Observable<number | undefined> } = {};
  uploadTasks: { [key: string]: AngularFireUploadTask } = {};
  isUploading = false;
  currentViewingMedia: MediaItem | null = null;

  constructor(private storage: AngularFireStorage) {}

  ngOnInit() {
    this.loadMedia();
  }

  loadMedia() {
    const folderRef = this.storage.ref('pruebas');
    folderRef.listAll().subscribe(
      result => {
        result.items.forEach(item => {
          item.getDownloadURL().then(url => {
            const type = this.getMediaType(item.name);
            this.mediaItems.push({ url, type, name: item.name });
          });
        });
      },
      error => {
        console.error(`Error al cargar los archivos de pruebas`, error);
      }
    );
  }

  getMediaType(fileName: string): 'image' | 'video' | 'document' {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const videoExtensions = ['mp4', 'webm', 'ogg'];
    const extension = fileName.split('.').pop()?.toLowerCase();
    
    if (imageExtensions.includes(extension!)) return 'image';
    if (videoExtensions.includes(extension!)) return 'video';
    return 'document';
  }

  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = Array.from(input.files);
    } else {
      console.error('No files selected');
    }
  }

  uploadFiles(event: Event) {
    event.preventDefault();

    if (this.selectedFiles.length === 0) {
      console.error('No files selected');
      return;
    }

    this.isUploading = true;

    const uploadTasks = this.selectedFiles.map(file => {
      const type = this.getMediaType(file.name);
      const filePath = `pruebas/${new Date().getTime()}_${file.name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);

      this.uploadProgress[file.name] = task.percentageChanges();
      this.uploadTasks[file.name] = task;

      return task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.mediaItems.push({ url, type, name: file.name });
            delete this.uploadProgress[file.name];
            delete this.uploadTasks[file.name];
          });
        })
      );
    });

    forkJoin(uploadTasks).subscribe(
      () => {
        this.isUploading = false;
        this.selectedFiles = [];
      },
      error => {
        console.error('Upload failed', error);
        this.isUploading = false;
      }
    );
  }

  cancelUpload(fileName: string) {
    if (fileName in this.uploadTasks) {
      this.uploadTasks[fileName].cancel();
      delete this.uploadProgress[fileName];
      delete this.uploadTasks[fileName];
    }
  }

  cancelAllUploads() {
    Object.keys(this.uploadTasks).forEach(fileName => {
      this.cancelUpload(fileName);
    });
    this.isUploading = false;
  }

  viewMedia(media: MediaItem) {
    this.currentViewingMedia = media;
    this.mediaModal.present();
  }
}