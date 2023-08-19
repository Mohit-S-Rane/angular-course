import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Contact } from 'src/app/models/resume';
import { ApiService } from 'src/app/services/api-service';

interface DataType {
  contactDetails: Contact;
  resumeId: string;
}

@Component({
  selector: 'app-contact-detail',
  templateUrl: 'contact-detail-form.component.html',
  styleUrls: ['contact-detail-form.component.scss']
})


export class ContactDetailFormComponent implements OnInit {
  contactDetailForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<ContactDetailFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataType, private apiService: ApiService) {
  }

  ngOnInit() {
    const firstName = this.data.contactDetails ? this.data.contactDetails.first_name : null;
    const lastName = this.data.contactDetails ? this.data.contactDetails.last_name : null;
    const phoneNumber = this.data.contactDetails ? this.data.contactDetails.phone_number : null;
    const email = this.data.contactDetails ? this.data.contactDetails.email : null;
    const address = this.data.contactDetails ? this.data.contactDetails.address : null;
    const city = this.data.contactDetails ? this.data.contactDetails.city : null;
    const state = this.data.contactDetails ? this.data.contactDetails.state : null;
    const zipCode = this.data.contactDetails ? this.data.contactDetails.zip_code : null;
    const country = this.data.contactDetails ? this.data.contactDetails.country : null;
    const summary = this.data.contactDetails ? this.data.contactDetails.summary : null;
    const linkedInUrl = this.data.contactDetails ? this.data.contactDetails.linkedin_url : null;
    const websiteUrl = this.data.contactDetails ? this.data.contactDetails.website_url : null;

    this.contactDetailForm = new FormGroup({
      first_name: new FormControl(firstName, [Validators.required]),
      last_name: new FormControl(lastName, [Validators.required]),
      phone_number: new FormControl(phoneNumber, [Validators.required]),
      email: new FormControl(email, [Validators.required]),
      address: new FormControl(address, [Validators.required]),
      city: new FormControl(city, [Validators.required]),
      state: new FormControl(state, [Validators.required]),
      zip_code: new FormControl(zipCode, [Validators.required]),
      country: new FormControl(country, [Validators.required]),
      summary: new FormControl(summary, [Validators.required]),
      linkedin_url: new FormControl(linkedInUrl),
      website_url: new FormControl(websiteUrl),
    });
  }

  addOrUpdate() {
    if (this.data.contactDetails) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    debugger
    const observer$ = this.apiService.addContactDetails(this.data.resumeId, this.contactDetailForm.value);
    observer$.subscribe(data => {
      console.log(data);
    });
  }

  update() {
    const observer$ = this.apiService.updateContactDetails(this.contactDetailForm.value, this.data.contactDetails?._id);
    observer$.subscribe(data => {
      console.log(data);
    });
  }
}