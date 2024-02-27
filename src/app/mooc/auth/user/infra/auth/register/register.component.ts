import { Component } from '@angular/core';
import { UserRegisterUseCase } from '../../../domain/usecases/user-register.usecase';
import { UserLoginGoogleUseCase } from '../../../domain/usecases/user-login-google.usercase';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm!: FormGroup;

  constructor(
    private registerUseCase: UserRegisterUseCase,
    private loginGoogleUseCase: UserLoginGoogleUseCase,
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')!.value;
    const confirmPassword = group.get('confirmPassword')!.value;

    return password === confirmPassword ? null : { mismatch: true };
  }

  get f() { 
    return this.registerForm.controls; 
  }

  onSubmit() {
    console.log("form",this.registerForm.value);
    
    if (!this.registerForm.invalid) {
      this.registerUseCase.execute({
          email: this.registerForm.value.email.toString(), 
          username: this.registerForm.value.email.toString(), 
          password:this.registerForm.value.password.toString()}
      ).subscribe((userData) => {
        console.log("user registered by email: ", userData);
        
      });
    }
  }

  registerGoogle(){
    this.loginGoogleUseCase.execute().subscribe((userData) => {
      console.log("user registered google: ", userData);
      
    })
  }
}
