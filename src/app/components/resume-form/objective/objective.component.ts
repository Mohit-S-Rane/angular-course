import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Objective } from 'src/app/models/objective';
import { ObjectiveFormComponent } from '../resume-dialogues/objective-form/objective-form.component';

@Component({
    selector: 'app-objective',
    templateUrl: 'objective.component.html',
    styleUrls: ['objective.component.scss']
  })

export class ObjectiveComponent {
  @Input() resumeId: string;
  @Input() objectives: Objective[];

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(ObjectiveFormComponent, {
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}