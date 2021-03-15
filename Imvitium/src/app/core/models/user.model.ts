export class UserModel {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public username: string,
        public type: string,
        public account_type: string,
        public date: string
    ) {}
}