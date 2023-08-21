import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api-service';
import { EmploymentHistory } from 'src/app/models/employment-history';

export interface DataType {
  resumeId: string;
  employmentHistory: EmploymentHistory;
}

@Component({
  selector: 'app-employment-history-form',
  templateUrl: 'employment-history-form.component.html',
  styleUrls: ['employment-history-form.component.scss'],
})
export class EmploymentHistoryFormComponent implements OnInit {
  employmentHistoryForm: FormGroup;
  monthArray = ['January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August', 'September', 'November', 'December'];

  constructor(
    public dialogRef: MatDialogRef<EmploymentHistoryFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    const employer = this.data.employmentHistory ? this.data.employmentHistory.employer : null;
    const designation = this.data.employmentHistory ? this.data.employmentHistory.designation : null;
    const organisation = this.data.employmentHistory ? this.data.employmentHistory.organisation : null;
    const city = this.data.employmentHistory ? this.data.employmentHistory.city : null;
    const state = this.data.employmentHistory ? this.data.employmentHistory.state : null;
    const start_month = this.data.employmentHistory ? this.data.employmentHistory.start_month : null;
    const start_year = this.data.employmentHistory ? this.data.employmentHistory.start_year : null;
    const end_month = this.data.employmentHistory ? this.data.employmentHistory.end_month : null;
    const end_year = this.data.employmentHistory ? this.data.employmentHistory.end_year : null;

    
    this.employmentHistoryForm = new FormGroup({
        employer: new FormControl(employer, [Validators.required]),
        designation: new FormControl(designation, [Validators.required]),
        organisation: new FormControl(organisation, [Validators.required]),
        city: new FormControl(city, [Validators.required]),
        state: new FormControl(state, [Validators.required]),
        start_month: new FormControl(start_month, [Validators.required]),
        start_year: new FormControl(start_year, [Validators.required]),
        end_month: new FormControl(end_month, [Validators.required]),
        end_year: new FormControl(end_year, [Validators.required]),
    });
  }

  addOrUpdate() {
    if (this.data.employmentHistory) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    console.log(this.employmentHistoryForm.value);
    
    const observer$ = this.apiService.addEmploymentHistory(
      this.employmentHistoryForm.value,
      this.data.resumeId
    );
    observer$.subscribe((data) => {
      console.log(data);
      this.dialogRef.close();
    });
  }

  update() {
    const observer$ = this.apiService.updateEmploymentHistory(
      this.employmentHistoryForm.value,
      this.data.employmentHistory._id
    );
    observer$.subscribe((data) => {
      this.dialogRef.close();
    });
  }
}
