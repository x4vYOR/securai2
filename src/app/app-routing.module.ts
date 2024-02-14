import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  // Otras rutas principales de la aplicación,
  // por ejemplo, una página de inicio, acerca de, etc.

  // Puedes incluir rutas de los módulos de usuario y producto aquí
  { path: 'auth', loadChildren: () => import('./mooc/user/user.module').then(m => m.UserModule) },
  { path: '**', loadChildren: () => import('./mooc/pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
