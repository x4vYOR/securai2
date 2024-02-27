import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";

export abstract class UserRepository {
    abstract login(params: {email: string, password: string}): Observable<UserModel>;
    abstract loginGoogle(): Observable<UserModel>;
    abstract register(params:{email: string, password:string}): Observable<UserModel>;
    abstract getUserProfile(): Observable<UserModel>;
    abstract forgotPassword(params: {email:string}): Observable<void>;
    abstract logout():Observable<void>;
    protected _isLoggedIn:boolean = false;

    get isLoggedIn(): boolean {
        return this._isLoggedIn;
    }
    
    set isLoggedIn(value: boolean) {
        this._isLoggedIn = value;
    }
}