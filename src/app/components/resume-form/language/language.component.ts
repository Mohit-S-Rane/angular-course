import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Language } from 'src/app/models/language';
import { LanguageFormComponent } from '../resume-dialogues/language-form/language-form.component';

@Component({
    selector: 'app-language',
    templateUrl: 'language.component.html',
    styleUrls: ['language.component.scss']
  })

export class LanguageComponent {
  @Input() languages: Language[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(LanguageFormComponent, {
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}