import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { SessionGuard } from './core/guards/session.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./mooc/auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./mooc/admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard] },
  { path: 'superadmin', loadChildren: () => import('./mooc/superadmin/superadmin.module').then(m => m.SuperadminModule), canActivate: [AuthGuard]  },
  { path: '', loadChildren: () => import('./mooc/public/public.module').then(m => m.PublicModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
