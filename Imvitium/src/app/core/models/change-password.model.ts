export class ChangePasswordModel {
    constructor(
        public old_password: string,
        public new_password: string
    ) {}
}