export class UserModel {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public username: string,
        public type: string,
        public account_type?: string,
        public date?: string,
        public email_verified?: number,
        public created_at?: string,
        public updated_at?: string,
        public record_deleted?: number
    ) {}
}