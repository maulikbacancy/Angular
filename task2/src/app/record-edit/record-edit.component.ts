import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-record-edit',
  templateUrl: './record-edit.component.html',
  styleUrls: ['./record-edit.component.css']
})
export class RecordEditComponent implements OnInit {
  private id: string;
  public editMode = false;
  public firstName: string;
  public lastName: string;

  constructor(private route: ActivatedRoute, private recordService: RecordService, private router: Router) { }

  ngOnInit(): void {
    // get id from query param and check whether it is edit mode or new user mode and updeate variable accordingly
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.editMode = params.id === 'new' ? false : true;

        if (this.editMode === true) {
          this.firstName = this.recordService.editUser.first_name;
          this.lastName = this.recordService.editUser.last_name;
        }
        else {
          this.firstName = '';
          this.lastName = '';
        }
      }
    );
  }

  public onSubmitForm(form: NgForm): void {
    if (this.editMode === true) {
      this.recordService.updateUser(+this.id, {first_name: this.firstName, job: this.lastName}).subscribe(
        (responce) => {
          console.log(responce);
        }
      );
    }
    else {
      this.recordService.addNewUser({first_name: this.firstName, job: this.lastName}).subscribe(
        (responce) => {
          console.log(responce);
        }
      );
    }
    form.reset();
    this.router.navigate(['/recordlist'], {relativeTo: this.route});
  }
}
