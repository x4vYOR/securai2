import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { UserRepository } from "./domain/repositories/user.repository";
import { UserLoginUseCase } from "./domain/usecases/user-login.usercase";
import { UserRegisterUseCase } from "./domain/usecases/user-register.usecase";
import { GetUserProfileUseCase } from "./domain/usecases/get-user-profile.usecase";
import { UserRepositoryImplementation } from "./data/repositories/user-implementation.repository";
import { LoginComponent } from './infra/auth/login/login.component';
import { RegisterComponent } from './infra/auth/register/register.component';
import { UserRoutingModule } from "./user-routing.module";
import { UserRepositoryImplementationFirebase } from "./data/repositories/user-implementation-firebase.repository";

import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';

const userLoginUseCaseFactory = (userRepo: UserRepository) => new UserLoginUseCase(userRepo);
export const userLoginUseCaseProvider = {
    provide: UserLoginUseCase,
    useFactory: userLoginUseCaseFactory,
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

@NgModule({
    providers: [
        userLoginUseCaseProvider,
        userRegisterUseCaseProvider,
        getUserProfileUseCaseProvider,
        {
            provide: UserRepository, useClass: UserRepositoryImplementationFirebase
        },
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        UserRoutingModule,
        CheckboxModule,
        PasswordModule
    ],
    declarations: [
      LoginComponent,
      RegisterComponent
    ],
})

export class UserModule { }