import { Component, Input, OnInit } from "@angular/core";
import { Resume } from "src/app/models/resume";

@Component({
    selector: 'app-resume-form',
    templateUrl: 'resume-form.component.html',
    styleUrls: ['resume-form.component.scss']
})

export class ResumeFormComponent implements OnInit{
    @Input() resume: Resume;
    constructor(){
        console.log('fetch resume', this.resume);
        
    }

    ngOnInit(): void {
        console.log('log check', this.resume._id);
        
    }
}