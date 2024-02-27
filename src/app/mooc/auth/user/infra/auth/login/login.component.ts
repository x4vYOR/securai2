import { Component, OnInit } from '@angular/core';
import { UserLoginGoogleUseCase } from '../../../domain/usecases/user-login-google.usercase';
import { UserLoginUseCase } from '../../../domain/usecases/user-login.usercase';
import { UserModel } from '../../../domain/models/user.model';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(
    private loginGoogleUseCase: UserLoginGoogleUseCase,
    private loginUseCase: UserLoginUseCase
  ){

  }
  
  ngOnInit(): void {
      
  }

  login( email:string, password: string ){
    console.log(email, password);
    
    this.loginUseCase.execute({email: email, password: password}).subscribe((user:UserModel)=>{
      console.log("user:", user);
    });
  }

  loginGoogle(){
    
    this.loginGoogleUseCase.execute().subscribe((user:UserModel)=>{
      console.log("user:", user);
    });
  }
}
