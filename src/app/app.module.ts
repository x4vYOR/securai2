import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ServerErrorComponent } from './shared/server-error/server-error.component';
import { MaintenanceComponent } from './shared/maintenance/maintenance.component';
import { AdminModule } from './mooc/admin/admin.module';
import { SuperadminModule } from './mooc/superadmin/superadmin.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './mooc/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ServerErrorComponent,
    MaintenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    SuperadminModule,
    AuthModule,
    SharedModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
