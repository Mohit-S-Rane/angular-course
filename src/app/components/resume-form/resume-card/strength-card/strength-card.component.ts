import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Strength } from 'src/app/models/strength';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { StrengthFormComponent } from '../../resume-dialogues/strength-form/strength-form.component';

@Component({
    selector: 'app-strength-card',
    templateUrl: 'strength-card.component.html',
    styleUrls: ['strength-card.component.scss']
  })

export class StrengthCardComponent {
  @Input() strength: Strength;

  constructor(private matDialog: MatDialog, private apiService: ApiService, private alertService: AlertService) {
  }

  edit() {
    this.matDialog.open(StrengthFormComponent, {
      width: '90%', height: '90%', data: {strength: this.strength}
    });
  }

  delete() {
    this.apiService.deleteStrength(this.strength._id)
      .subscribe(data => {
        this.alertService.success('strength deleted Successfully');
      });
  }
}
