import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AwardsAchivement } from 'src/app/models/awards-achivement';
import { ApiService } from 'src/app/services/api-service';

interface DataType {
  award: AwardsAchivement;
  resumeId: string;
}

@Component({
    selector: 'app-award-form',
    templateUrl: 'award-form.component.html',
    styleUrls: ['award-form.component.html']
  })

export class AwardFormComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<AwardFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataType,
              private apiService: ApiService) {
  }

  ngOnInit() {
    const awardAchievement = this.data.award ? this.data.award.awards_and_achivements : null;
    this.form = new FormGroup({
      awards_and_achivements: new FormControl(awardAchievement, [Validators.required])
    });
  }

  addOrUpdate() {
    if (this.data.award) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    const observer$ = this.apiService.addAward(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  update() {
    const observer$ = this.apiService.updateAward(this.form.value, this.data.award._id);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

}
