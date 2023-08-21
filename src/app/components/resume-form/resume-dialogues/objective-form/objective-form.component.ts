import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Objective } from 'src/app/models/objective';
import { ApiService } from 'src/app/services/api-service';

interface DataType {
  objective: Objective;
  resumeId: any;
}

@Component({
    selector: 'app-objective-form',
    templateUrl: 'objective-form.component.html',
    styleUrls: ['objective-form.component.scss']
  })

export class ObjectiveFormComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<ObjectiveFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataType, private apiService: ApiService) {
  }

  ngOnInit() {
    const objective = this.data.objective ? this.data.objective.objective : null;
    const date = this.data.objective ? this.data.objective.date : null;
    const place = this.data.objective ? this.data.objective.place : null;
    const declaration = this.data.objective ? this.data.objective.declaration : null;
    this.form = new FormGroup({
      objective: new FormControl(objective, [Validators.required]),
      date: new FormControl(date, [Validators.required]),
      place: new FormControl(place, [Validators.required]),
      declaration: new FormControl(declaration, [Validators.required]),
    });
  }

  addOrUpdate() {
    if (this.data.objective) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    const observer$ = this.apiService.addObjective(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  update() {
    const observer$ = this.apiService.updateObjective(this.form.value, this.data.objective._id);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }
}
