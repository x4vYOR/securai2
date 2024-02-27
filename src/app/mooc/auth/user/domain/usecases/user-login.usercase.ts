import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";
import { UseCase } from "../../../../base/domain/use-case";

export class UserLoginUseCase implements UseCase<{email:string, password:string}, UserModel>{

    constructor(private userRepository: UserRepository) {
    }

    execute(params: { email: string; password: string; }): Observable<UserModel> {
        return this.userRepository.login(params);
    }

}