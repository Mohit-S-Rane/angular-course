import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Interest } from 'src/app/models/interest';
import { InterestFormComponent } from '../resume-dialogues/interest-form/interest-form.component';

@Component({
    selector: 'app-interest',
    templateUrl: 'interest.component.html',
    styleUrls: ['interest.component.scss']
  })

export class InterestComponent {
  @Input() interests: Interest[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(InterestFormComponent, {
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}