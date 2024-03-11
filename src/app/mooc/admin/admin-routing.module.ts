import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      loadChildren: () => import('./pages/pages-admin.module').then(m => m.PagesAdminModule), canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
