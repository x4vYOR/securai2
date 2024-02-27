import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedAdminModule } from './shared/shared-admin.module';
import { PagesAdminModule } from './pages/pages-admin.module';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedAdminModule,
    PagesAdminModule,
  ]
})
export class AdminModule { }
