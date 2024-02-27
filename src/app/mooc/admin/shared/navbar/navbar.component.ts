import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  darkMode:boolean = false;
  
  constructor(private navbarService: NavbarService){}

  ngOnInit(): void {
    this.updateDarkModeIcon();
  }

  updateDarkModeIcon(){
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.darkMode = true;
    } else {
      this.darkMode = false;
    }
  }

  logout(){
    this.navbarService.userLogout();
  }

  toggleDarkMode(){
    this.navbarService.darkModeToggle();
    this.updateDarkModeIcon();
  }

}
