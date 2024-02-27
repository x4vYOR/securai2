import { Observable } from "rxjs";
import { UserRepository } from "../repositories/user.repository";
import { UseCase } from "../../../../base/domain/use-case";

export class ForgotPasswordUseCase implements UseCase<{email:string}, void> {

    constructor(private userRepository:UserRepository){}

    execute(params: { email: string }): Observable<void> {
        return this.userRepository.forgotPassword(params);
    }


}