import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Strength } from 'src/app/models/strength';
import { StrengthFormComponent } from '../resume-dialogues/strength-form/strength-form.component';

@Component({
    selector: 'app-strength',
    templateUrl: 'strength.component.html',
    styleUrls: ['strength.component.scss']
  })

export class StrengthComponent {
  @Input() strength: Strength[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(StrengthFormComponent, {
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
