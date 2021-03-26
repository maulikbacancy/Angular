export class EditUserModel {
    constructor(
        public name: string,
        public email: string,
        public account_type: string,
        public id?: number,
        public index?: number
    ) {}
}