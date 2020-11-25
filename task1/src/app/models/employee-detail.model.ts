export class EmployeeDetail {

    public role = 'Project-Manager';
    public fname: string;
    public lname: string;
    public contact: number;
    public salary: number;

    constructor( role: string, fname: string, lname: string, contact: number, salary: number ) {
        this.role = role;
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
        this.salary = salary;
    }
}