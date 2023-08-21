import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiService } from 'src/app/services/api-service';
import { Language } from 'src/app/models/language';

interface DataType {
  language: Language;
  resumeId: any;
}

@Component({
    selector: 'app-language-form',
    templateUrl: 'language-form.component.html',
    styleUrls: ['language-form.component.scss']
  })

export class LanguageFormComponent implements OnInit {
  form: FormGroup;
  levelArray = ['basic', 'intermediate', 'advance'];

  constructor(public dialogRef: MatDialogRef<LanguageFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataType, private apiService: ApiService) {
  }

  ngOnInit() {
    const name = this.data.language ? this.data.language.name : null;
    const level = this.data.language ? this.data.language.level : null;
    this.form = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      level: new FormControl(level, [Validators.required]),
    });
  }

  addOrUpdate() {
    if (this.data.language) {
      this.update();
    } else {
      this.save();
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  update() {
    const observer$ = this.apiService.updateLanguage(this.form.value, this.data.language._id);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  save() {
    const observer$ = this.apiService.addLanguage(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }
}