import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ContactModel } from '../../core/models/contact.model';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor(
    private contactService: ContactService,
    private tostrService: ToastrService) { }

  ngOnInit(): void {
  }

  public onContactClick(): void {
    window.open("https://discord.gg/XzAkM7qHYF","_blank");
  }

  public  onSubmitForm(form: NgForm): void {
    let contactData = new ContactModel(form.value.name, form.value.email, form.value.message);
    this.subscription = this.contactService.contactDetailSubmit(contactData).subscribe(res => {
      this.tostrService.success(res.email,'Message Sent Successfully from');
    });
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
