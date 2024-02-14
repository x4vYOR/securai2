import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { UserRepository } from "../../mooc/user/domain/repositories/user.repository";


export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const userRepository = inject(UserRepository);
    const router = inject(Router);

    userRepository.isLoggedIn || router.navigate(["login"])
    return true;
}