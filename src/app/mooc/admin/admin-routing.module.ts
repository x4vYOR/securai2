import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SessionGuard } from '../../core/guards/session.guard';

const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      loadChildren: () => import('./pages/pages-admin.module').then(m => m.PagesAdminModule), canActivate: [SessionGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
