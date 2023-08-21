import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EmploymentHistory } from 'src/app/models/employment-history';
import { EmploymentHistoryFormComponent } from '../resume-dialogues/employment-history-form/employment-history-form.component';

@Component({
  selector: 'app-employment-history',
  templateUrl: 'employment-history.component.html',
  styleUrls: ['employment-history.component.scss']
})

export class EmploymentHistoryComponent {
  @Input() resumeId: string;
  @Input() employmentHistories: EmploymentHistory[];

  constructor(private matDialog: MatDialog) {
  }

  add() {
    this.matDialog.open(EmploymentHistoryFormComponent, {
      width: '90%', height: '90%', data: {resumeId: this.resumeId}
    });
  }
}