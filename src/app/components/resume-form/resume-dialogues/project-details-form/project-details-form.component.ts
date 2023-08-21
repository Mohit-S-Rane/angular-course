import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ProjectDetail } from 'src/app/models/project-detail';
import { ApiService } from 'src/app/services/api-service';

interface DataType {
  projectDetail: ProjectDetail;
  resumeId: any;
}

@Component({
    selector: 'app-project-details-form',
    templateUrl: 'project-details-form.component.html',
    styleUrls: ['project-details-form.component.scss']
  })

export class ProjectDetailsFormComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<ProjectDetailsFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataType, private apiService: ApiService) {
  }

  ngOnInit() {
    const title = this.data.projectDetail ? this.data.projectDetail.title : null;
    const description = this.data.projectDetail ? this.data.projectDetail.description : null;
    const role = this.data.projectDetail ? this.data.projectDetail.role : null;
    const duration = this.data.projectDetail ? this.data.projectDetail.duration : null;
    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      role: new FormControl(role, [Validators.required]),
      duration: new FormControl(duration, [Validators.required]),
    });
  }

  addOrUpdate() {
    if (this.data.projectDetail) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    const observer$ = this.apiService.addProjectDetail(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  update() {
    const observer$ = this.apiService.updateProjectDetail(this.form.value, this.data.projectDetail._id);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }
}