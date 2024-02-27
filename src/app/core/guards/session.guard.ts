import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserRepository } from "../../mooc/auth/user/domain/repositories/user.repository";

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private userRepository: UserRepository, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userRepository.isLoggedIn) {
      this.router.navigate(["admin/dashboard"]); // El usuario si está autenticado, redirigir a la página de dashboard
      return false; // El usuario está autenticado, permitir acceso a la ruta
    } else {
      return true; // Si permitir acceso a la ruta
    }
  }
}