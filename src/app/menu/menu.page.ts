import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  categorias: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.categorias = this.firestore.collection('categorias').valueChanges();
  }

  ngOnInit() {
  }
}