import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-nuestra-historia',
  templateUrl: './nuestra-historia.page.html',
  styleUrls: ['./nuestra-historia.page.scss'],
})
export class NuestraHistoriaPage implements OnInit {
  selectedFile: File | null = null;
  videoUrls: string[] = [];
  uploadProgress: Observable<number | undefined> | null = null;
  uploadTask: AngularFireUploadTask | null = null;
  isUploading = false;

  constructor(private storage: AngularFireStorage) {}

  ngOnInit() {
    this.loadVideos();
  }

  loadVideos() {
    const videosRef = this.storage.ref('videos');
    videosRef.listAll().subscribe(
      result => {
        result.items.forEach(item => {
          item.getDownloadURL().then(url => {
            this.videoUrls.push(url);
          });
        });
      },
      error => {
        console.error('Error al cargar los videos', error);
      }
    );
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    } else {
      console.error('No file selected');
    }
  }

  uploadVideo(event: Event) {
    event.preventDefault();

    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }

    this.isUploading = true;
    const filePath = `videos/${new Date().getTime()}_${this.selectedFile.name}`;
    const fileRef = this.storage.ref(filePath);
    this.uploadTask = this.storage.upload(filePath, this.selectedFile);

    // Observe upload progress
    this.uploadProgress = this.uploadTask.percentageChanges();

    this.uploadTask.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          this.videoUrls.push(url);
          this.isUploading = false;
          this.uploadProgress = null;
          this.uploadTask = null;
        }, error => {
          console.error('Failed to get download URL', error);
          this.isUploading = false;
        });
      })
    ).subscribe(null, error => {
      console.error('Upload failed', error);
      this.isUploading = false;
    });
  }

  cancelUpload() {
    if (this.uploadTask) {
      this.uploadTask.cancel();
      this.isUploading = false;
      this.uploadProgress = null;
      this.uploadTask = null;
    }
  }
}