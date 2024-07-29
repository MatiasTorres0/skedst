import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'Skedst-subcategoria',
  templateUrl: './subcategoria.page.html',
  styleUrls: ['./subcategoria.page.scss'],
})
export class SubcategoriaPage implements OnInit {
  subcategorias!: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.subcategorias = this.firestore.collection('subcategorias').valueChanges();
  }
}