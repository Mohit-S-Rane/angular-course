import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Refrence } from 'src/app/models/refrence';
import { ReferenceFormComponent } from '../resume-dialogues/reference-form/reference-form.component';

@Component({
    selector: 'app-reference',
    templateUrl: 'reference.component.html',
    styleUrls: ['reference.component.scss']
  })

export class ReferenceComponent {

  @Input() resumeId: string;
  @Input() references: Refrence[];

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(ReferenceFormComponent, {
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}