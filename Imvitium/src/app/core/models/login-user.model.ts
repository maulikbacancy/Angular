import { UserModel } from "./user.model";

export class LoginUserModel {
    constructor(
        public access_token:string,
        public token_type:string,
        public expires_in:number,
        public email:string,
        public register:UserModel
    ) {}
}