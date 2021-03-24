export class ContactModel {
    constructor(
        public name: string,
        public email: string,
        public message: string,
        public updated_at?: string,
        public created_at?: string,
        public id?: number
    ) {}
}