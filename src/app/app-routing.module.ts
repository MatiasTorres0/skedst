import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),

  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule),


  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule),

  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'protected-route',
    loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'protected',
    loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedPageModule)
  },

  {
    path: 'subcategoria',
    loadChildren: () => import('./subcategoria/subcategoria.module').then( m => m.SubcategoriaPageModule)
  },
  {
    path: 'nuestra-historia',
    loadChildren: () => import('./nuestra-historia/nuestra-historia.module').then( m => m.NuestraHistoriaPageModule)
  },
  {
    path: 'imagenes',
    loadChildren: () => import('./imagenes/imagenes.module').then( m => m.ImagenesPageModule)
  },
  {
    path: 'pruebas',
    loadChildren: () => import('./pruebas/pruebas.module').then( m => m.PruebasPageModule)
  },
  {
    path: 'cart',
    component: CartComponent
  },
  //{
 // path: 'inicio',
  //loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
//}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}