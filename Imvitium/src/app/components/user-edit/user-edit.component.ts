import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public isDisable = true;

  constructor() { }

  ngOnInit(): void {
  }

  public onSave(): void {
    this.isDisable = !this.isDisable;
  }

  public onCancel(): void {
    this.isDisable = true;
  }

}
