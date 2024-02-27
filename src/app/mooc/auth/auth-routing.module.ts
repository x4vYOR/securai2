import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/infra/auth/login/login.component';
import { RegisterComponent } from './user/infra/auth/register/register.component';
import { ForgotPasswordComponent } from './user/infra/auth/forgot-password/forgot-password.component';
import { SessionGuard } from '../../core/guards/session.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent, canActivate: [SessionGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
