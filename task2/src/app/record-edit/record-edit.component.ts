import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { from } from 'rxjs';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-record-edit',
  templateUrl: './record-edit.component.html',
  styleUrls: ['./record-edit.component.css']
})
export class RecordEditComponent implements OnInit {
  id: number;
  editMode = false;
  firstName: string;
  lastName: string;

  constructor(private route: ActivatedRoute, private recordService: RecordService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        if (this.editMode === true) {
          this.recordService.getUserById(this.id).subscribe(
            requestedData => {
              this.firstName = requestedData.data.first_name;
              this.lastName = requestedData.data.last_name;
            }
          );
        }
      }
    );
  }

  onSubmitForm(form: NgForm): void {
    if(this.editMode === true) {
      this.recordService.updateUser(this.id, {first_name: this.firstName, job: this.lastName});
    }
    else {
      this.recordService.addNewUser({first_name: this.firstName, job: this.lastName});
    }
  }

}
