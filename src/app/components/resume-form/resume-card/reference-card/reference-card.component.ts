import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Refrence } from 'src/app/models/refrence';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { ReferenceFormComponent } from '../../resume-dialogues/reference-form/reference-form.component';

@Component({
    selector: 'app-reference-card',
    templateUrl: 'reference-card.component.html',
    styleUrls: ['reference-card.component.scss']
  })

export class ReferenceCardComponent {
  @Input() reference: Refrence;

  constructor(private matDialog: MatDialog, private apiService: ApiService, private alertService: AlertService) {
  }

  edit() {
    this.matDialog.open(ReferenceFormComponent, {
      width: '90%', height: '90%', data: {reference: this.reference}
    });
  }

  delete() {
    this.apiService.deleteReference(this.reference._id)
      .subscribe(data => {
        this.alertService.success('Reference deleted Successfully');
      });
  }
}