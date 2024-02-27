import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { UserRepository } from "./domain/repositories/user.repository";
import { UserLoginUseCase } from "./domain/usecases/user-login.usercase";
import { UserRegisterUseCase } from "./domain/usecases/user-register.usecase";
import { GetUserProfileUseCase } from "./domain/usecases/get-user-profile.usecase";
import { LoginComponent } from './infra/auth/login/login.component';
import { RegisterComponent } from './infra/auth/register/register.component';
import { UserRepositoryImplementationFirebase } from "./data/repositories/user-implementation-firebase.repository";

import { UserLoginGoogleUseCase } from "./domain/usecases/user-login-google.usercase";
import { UserLogoutUseCase } from "./domain/usecases/user-logout.usercase";
import { ReactiveFormsModule } from "@angular/forms";
import { ForgotPasswordUseCase } from "./domain/usecases/forgot-password.usecase";
import { ForgotPasswordComponent } from "./infra/auth/forgot-password/forgot-password.component";
import { RouterModule } from "@angular/router";

const userLoginUseCaseFactory = (userRepo: UserRepository) => new UserLoginUseCase(userRepo);
export const userLoginUseCaseProvider = {
    provide: UserLoginUseCase,
    useFactory: userLoginUseCaseFactory,
    deps: [UserRepository],
};

const userLoginGoogleUseCaseFactory = (userRepo: UserRepository) => new UserLoginGoogleUseCase(userRepo);
export const userLoginGoogleUseCaseProvider = {
    provide: UserLoginGoogleUseCase,
    useFactory: userLoginGoogleUseCaseFactory,
    deps: [UserRepository],
};

const userLogoutUseCaseFactory = (userRepo: UserRepository) => new UserLogoutUseCase(userRepo);
export const userLogoutUseCaseProvider = {
    provide: UserLogoutUseCase,
    useFactory: userLogoutUseCaseFactory,
    deps: [UserRepository],
};

const userRegisterUseCaseFactory = (userRepo: UserRepository) => new UserRegisterUseCase(userRepo);
export const userRegisterUseCaseProvider = {
    provide: UserRegisterUseCase,
    useFactory: userRegisterUseCaseFactory,
    deps: [UserRepository]
};

const getUserProfileUseCaseFactory = (userRepo: UserRepository) => new GetUserProfileUseCase(userRepo);
export const getUserProfileUseCaseProvider = {
    provide: GetUserProfileUseCase,
    useFactory: getUserProfileUseCaseFactory,
    deps: [UserRepository]
};

const forgotPasswordUseCaseFactory = (userRepo: UserRepository) => new ForgotPasswordUseCase(userRepo);
export const forgotPasswordUseCaseProvider = {
    provide: ForgotPasswordUseCase,
    useFactory: forgotPasswordUseCaseFactory,
    deps: [UserRepository]
};

@NgModule({
    providers: [
        userLoginUseCaseProvider,
        userRegisterUseCaseProvider,
        getUserProfileUseCaseProvider,
        userLoginGoogleUseCaseProvider,
        userLogoutUseCaseProvider,
        forgotPasswordUseCaseProvider,
        {
            provide: UserRepository, useClass: UserRepositoryImplementationFirebase
        },
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
      LoginComponent,
      RegisterComponent,
      ForgotPasswordComponent
    ],
})

export class UserModule { }