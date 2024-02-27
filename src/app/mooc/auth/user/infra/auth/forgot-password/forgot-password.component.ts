import { Component } from '@angular/core';
import { ForgotPasswordUseCase } from '../../../domain/usecases/forgot-password.usecase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  constructor(
    private forgotPasswordUseCase: ForgotPasswordUseCase,
    private router: Router
  ) {

  }

  forgotPassword(email: string){
    console.log("email forgoted: ", email);
    this.forgotPasswordUseCase.execute({email: email}).subscribe(()=>{
      console.log("Success forgot password");
    },
    error => {
      console.error("error: ",error);
    })
  }
}
