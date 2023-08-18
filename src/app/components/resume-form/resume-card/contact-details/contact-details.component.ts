import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ContactDetailFormComponent } from '../../resume-dialogues/contact-detail-form/contact-detail-form.component';
import { Contact } from 'src/app/models/resume';

@Component({
  selector: 'app-contact-details',
  templateUrl: 'contact-details.component.html',
  styleUrls: ['contact-details.component.scss']
})

export class ContactDetailsComponent {
  @Input() contactDetails: Contact;
  @Input() resumeId: string;

  constructor(private matDialog: MatDialog) {
  }

  openContactForm() {
    this.matDialog.open(ContactDetailFormComponent, {
      width: '90%', height: '90%', data: {contactDetails: this.contactDetails, resumeId: this.resumeId}
    });
  }
}
