import { Observable } from "rxjs";
import { UserRepository } from "../repositories/user.repository";
import { UseCase } from "../../../base/domain/use-case";

export class UserLogoutUseCase implements UseCase<void, void>{

    constructor(private userRepository: UserRepository) {
    }

    execute(): Observable<void> {
        return this.userRepository.logout();
    }

}