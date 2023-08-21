import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AwardsAchivement } from 'src/app/models/awards-achivement';
import { AwardFormComponent } from '../resume-dialogues/award-form/award-form.component';

@Component({
  selector: 'app-award',
  templateUrl: 'awards-achivement.component.html',
  styleUrls: ['awards-achivement.component.scss']
})

export class AwardComponent {
  @Input() resumeId: string;
  @Input() awards: AwardsAchivement[];

  constructor(private matDialog: MatDialog) {
  }

  add() {
    this.matDialog.open(AwardFormComponent, {
      width: '90%', height: '90%', data: {resumeId: this.resumeId}
    });
  }
}
