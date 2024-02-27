import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogoutUseCase } from '../../../auth/user/domain/usecases/user-logout.usercase';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  logoutEvent: EventEmitter<void> = new EventEmitter<void>();
  constructor(
    private userLogoutUseCase: UserLogoutUseCase,
    private router: Router
  ){}

  userLogout():void{
    this.userLogoutUseCase.execute().subscribe(() => {
      this.router.navigate(["/"]);
    });
  }

  darkModeToggle(){
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
      } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
      }

      // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
  }

}
