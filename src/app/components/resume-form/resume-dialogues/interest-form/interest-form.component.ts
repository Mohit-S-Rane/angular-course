import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Interest } from 'src/app/models/interest';
import { ApiService } from 'src/app/services/api-service';

interface DataType {
  interest: Interest;
  resumeId: any;
}

@Component({
    selector: 'app-interest-form',
    templateUrl: 'interest-form.component.html',
    styleUrls: ['interest-form.component.scss']
  })

export class InterestFormComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<InterestFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataType, private apiService: ApiService) {
  }

  ngOnInit() {
    const interest = this.data.interest ? this.data.interest.interest : null;
    this.form = new FormGroup({
      interest: new FormControl(interest, [Validators.required])
    });
  }

  addOrUpdate() {
    if (this.data.interest) {
      this.update();
    } else {
      this.save();
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  update() {
    const observer$ = this.apiService.updateInterest(this.form.value, this.data.interest._id);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  save() {
    const observer$ = this.apiService.addInterest(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }
}
