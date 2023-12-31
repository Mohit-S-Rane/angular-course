import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Objective } from 'src/app/models/objective';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { ObjectiveFormComponent } from '../../resume-dialogues/objective-form/objective-form.component';

@Component({
    selector: 'app-objective-card',
    templateUrl: 'objective-card.component.html',
    styleUrls: ['objective-card.component.scss']
  })

export class ObjectiveCardComponent {
  @Input() objective: Objective;

  constructor(private matDialog: MatDialog, private apiService: ApiService, private alertService: AlertService) {
  }

  edit() {
    this.matDialog.open(ObjectiveFormComponent, {
      width: '90%', height: '90%', data: {objective: this.objective}
    });
  }

  delete() {
    this.apiService.deleteObjective(this.objective._id)
      .subscribe(data => {
        this.alertService.success('Objective deleted Successfully');
      });
  }
}