import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Weakness } from 'src/app/models/weakness';
import { WeaknessFormComponent } from '../resume-dialogues/weakness-form/weakness-form.component';

@Component({
    selector: 'app-weakness',
    templateUrl: 'weakness.component.html',
    styleUrls: ['weakness.component.scss']
  })

export class WeaknessComponent {
  @Input() weaknesses: Weakness[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(WeaknessFormComponent, {
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
