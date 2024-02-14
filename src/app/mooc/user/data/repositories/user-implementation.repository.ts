import { Injectable } from "@angular/core";
import { UserRepository } from "../../domain/repositories/user.repository";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { UserModel } from "../../domain/models/user.model";
import { UserEntity } from "../entities/user-entity";
import { UserRepositoryMapperImplementation } from "../mappers/user-repository.mapper";


@Injectable({
    providedIn: 'root',
})
export class UserRepositoryImplementation extends UserRepository {

    userMapper = new UserRepositoryMapperImplementation();
    override _isLoggedIn: boolean = false;

    constructor(private http: HttpClient) {
        super();
    }

    override login(params: { email: string; password: string; }): Observable<UserModel> {
        return this.http.post<UserEntity>('http://example.com/login', {params})
            .pipe(
                map(
                    this.userMapper.mapFrom
                )
            );
    }

    override loginGoogle(): Observable<UserModel> {
        return new Observable();
    }

    override register(params: { email: string; username: string; password: string; }): Observable<UserModel> {
        return this.http.post<UserEntity>('http://example.com/register', {params})
            .pipe(
                map(
                    this.userMapper.mapFrom
                )
            );
    }

    override getUserProfile(): Observable<UserModel> {
        return this.http.get<UserEntity>('http://example.com/user')
            .pipe(
                map(
                    this.userMapper.mapFrom
                )
            );
    }

    override logout(): Observable<void> {
        return new Observable();
    }
    
}