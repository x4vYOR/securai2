import { Injectable, NgZone } from "@angular/core";
import { UserRepository } from "../../domain/repositories/user.repository";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { UserModel } from "../../domain/models/user.model";
import { UserEntity } from "../entities/user-entity";
import { UserRepositoryMapperImplementation } from "../mappers/user-repository.mapper";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { GoogleAuthProvider } from "@angular/fire/auth";


@Injectable({
    providedIn: 'root',
})
export class UserRepositoryImplementationFirebase extends UserRepository {

    userMapper = new UserRepositoryMapperImplementation();
    override _isLoggedIn: boolean = false;
    userData:any;

    constructor(
        private http: HttpClient, 
        private firebaseAuthenticationService: AngularFireAuth,
        private router: Router,
        private ngZone: NgZone
    ) {
        super();
        this.firebaseAuthenticationService.authState.subscribe((user) => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
            }else{
                localStorage.setItem('user', 'null');
            }
        })
    }

    get isLoggedIn():boolean{
        const user = JSON.parse(localStorage.getItem('user')!);
        return user !== null;
    }

    override login(params: { email: string; password: string; }): Observable<UserModel> {
        return new Observable((observer) => {
            this.firebaseAuthenticationService.signInWithEmailAndPassword(params.email, params.password)
            .then((userCredential) => {
                console.log(userCredential);
                this.userData = userCredential.user
                this.observeUserState();
                observer.next(this.userData);
            })
            .catch((error) => {
                alert(error.message);
                observer.error(error);
            })
        });
    }

    override loginGoogle(): Observable<UserModel> {
        return new Observable((observer) => {
            this.firebaseAuthenticationService.signInWithPopup(new GoogleAuthProvider)
            .then((userCredential) => {
                console.log(userCredential);
                this.userData = userCredential.user
                this.observeUserState();
                observer.next(this.userData);
            })
            .catch((error) => {
                alert(error.message);
                observer.error(error);
            })
        });
    }

    private observeUserState() {
        this.firebaseAuthenticationService.authState.subscribe((userState) => {
            userState && this.ngZone.run(() => this.router.navigate(['dashboard']))
        });
    }

    override register(params: { email: string; password: string; }): Observable<UserModel> {
        return new Observable((observer) => {
            this.firebaseAuthenticationService.createUserWithEmailAndPassword(params.email, params.password)
            .then((userCredential) => {
                console.log(userCredential);
                this.userData = userCredential.user
                this.observeUserState();
                observer.next(this.userData);
            })
            .catch((error) => {
                alert(error.message);
                observer.error(error);
            })
        });
    }

    override getUserProfile(): Observable<UserModel> {
        return new Observable((observer)=> observer.next(this.userData));
    }

    override logout(): Observable<void> {
        return new Observable((observer) => {
            this.firebaseAuthenticationService.signOut().then(() => {
                localStorage.removeItem('user');
                this.router.navigate(['login']);
                observer.next();
            }).catch((error) => {
                alert(error.message)
                observer.error(error)
            })
        })
    }
    
}