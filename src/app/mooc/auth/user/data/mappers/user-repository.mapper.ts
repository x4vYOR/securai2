import { Mapper } from "../../../../base/utils/mapper";
import { UserModel } from "../../domain/models/user.model";
import { UserEntity } from "../entities/user-entity";

export class UserRepositoryMapperImplementation extends Mapper<UserEntity, UserModel> {
    override mapFrom(param: UserEntity): UserModel {
        return {
            id: param.id,
            fullName: param.name,
            email: param.email,
            username: param.userName,
            phoneNum: param.phoneNumber,
            profilePicture: param.userPicture,
            activationStatus: param.activationStatus
        }
    }

    override mapTo(param: UserModel): UserEntity {
        return {
            id: param.id,
            name: param.fullName,
            email: param.email,
            userName: param.username,
            phoneNumber: param.phoneNum,
            userPicture: param.profilePicture,
            activationStatus: param.activationStatus
        }
    }
}