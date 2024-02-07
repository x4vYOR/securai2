//This doesn’t have to depend on any API and data you might be managing for the http requests 
//but solely on what the business demands from the user object.
export interface UserModel {
    id: string;
    fullName: string;
    username: string;
    email: string;
    phoneNum: string;
    createdAt?: Date;
    profilePicture: string;
    activationStatus: boolean;
}