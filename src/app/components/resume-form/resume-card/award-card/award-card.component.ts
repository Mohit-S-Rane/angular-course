import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AwardsAchivement } from 'src/app/models/awards-achivement';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { AwardFormComponent } from '../../resume-dialogues/award-form/award-form.component';

@Component({
    selector: 'app-award-card',
    templateUrl: 'award-card.component.html',
    styleUrls: ['award-card.component.html']
  })

export class AwardCardComponent {
  @Input() award: AwardsAchivement;

  constructor(private matDialog: MatDialog, private apiService: ApiService, private alertService: AlertService) {
  }

  edit() {
    this.matDialog.open(AwardFormComponent, {
      width: '90%', height: '90%', data: {award: this.award}
    });
  }

  delete() {
    this.apiService.deleteAward(this.award._id)
      .subscribe(data => {
        this.alertService.success('Award deleted Successfully');
      });
  }
}