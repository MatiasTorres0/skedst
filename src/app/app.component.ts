import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'mail' },
    { title: 'Menu', url: 'menu', icon: 'paper-plane' },
    { title: 'Productos', url: 'productos', icon: 'cart' },
    { title: 'Subscategorias', url: 'subcategoria', icon: 'archive' },
    { title: 'Nuestra Historia', url: 'nuestra-historia', icon: 'videocam' },
    { title: 'Imagenes', url: 'imagenes', icon: 'images' },
    { title:'Pruebas', url:'pruebas', icon: 'mail' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
  
}
