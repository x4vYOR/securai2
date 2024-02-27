import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";
import { UseCase } from "../../../../base/domain/use-case";

export class UserLoginGoogleUseCase implements UseCase<void, UserModel>{

    constructor(private userRepository: UserRepository) {
    }

    execute(): Observable<UserModel> {
        return this.userRepository.loginGoogle();
    }

}