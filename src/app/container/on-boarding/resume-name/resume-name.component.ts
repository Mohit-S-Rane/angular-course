import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "src/app/services/api-service";

@Component({
  selector: 'app-resume-name',
  templateUrl: 'resume-name.component.html',
  styleUrls: ['resume-name.component.scss']
})

export class ResumeNameComponent implements OnInit {
  resumeForm: FormGroup;
  @Input() isCompleted = true;
  loading = false;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.resumeForm = new FormGroup({
      name: new FormControl(null, [Validators.required])
    });
  }

  createResume() {
    this.loading = true;
    this.apiService.saveResume(this.resumeForm.value).subscribe(data => {
      this.loading = false;
      this.isCompleted = true;
    }, error => {
      this.loading = false;
    });
  }
}