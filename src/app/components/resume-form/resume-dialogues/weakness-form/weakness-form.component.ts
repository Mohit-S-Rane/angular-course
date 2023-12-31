import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Weakness } from 'src/app/models/weakness';
import { ApiService } from 'src/app/services/api-service';


interface DataType {
  weakness: Weakness;
  resumeId: any;
}

@Component({
    selector: 'app-weakness-form',
    templateUrl: 'weakness-form.component.html',
    styleUrls: ['weakness-form.component.scss']
  })

export class WeaknessFormComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<WeaknessFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataType, private apiService: ApiService) {
  }

  ngOnInit() {
    const name = this.data.weakness ? this.data.weakness.name : null;
    this.form = new FormGroup({
      name: new FormControl(name, [Validators.required])
    });
  }

  addOrUpdate() {
    if (this.data.weakness) {
      this.update();
    } else {
      this.save();
    }
  }

  update() {
    const observer$ = this.apiService.updateWeakness(this.form.value, this.data.weakness._id);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  save() {
    const observer$ = this.apiService.addWeakness(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }
}