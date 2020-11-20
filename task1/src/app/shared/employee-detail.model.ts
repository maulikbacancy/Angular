export class EmployeeDetail {

    public role: string;
    public fname: string;
    public lname: string;
    public contact: number;
    public salary: number;

    constructor( role: string, fname: string, lname: string, contact: number, salary: number ) {
        role = this.role;
        fname = this.fname;
        lname = this.lname;
        contact = this.contact;
        salary = this.salary;
    }
}