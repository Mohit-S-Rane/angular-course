import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-resume-name',
    templateUrl: 'resume-name.component.html',
    styleUrls: ['resume-name.component.scss']
})

export class ResumeNameComponent implements OnInit {
    resumeForm: FormGroup;
  
    constructor() {
    }
  
    ngOnInit() {
      this.resumeForm = new FormGroup({
        name: new FormControl(null, [Validators.required])
      });
    }
  
    createResume() {
      console.log('called');
    }
  }