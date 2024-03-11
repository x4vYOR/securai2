import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserRepository } from "../../mooc/auth/user/domain/repositories/user.repository";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userRepository: UserRepository, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userRepository.isLoggedIn) {
      console.log("AuthGuard: admin is LoggedIn");
      return true; 
    } else {
      this.router.navigate(["/auth/login"]);
      return false;
    }
  }
}