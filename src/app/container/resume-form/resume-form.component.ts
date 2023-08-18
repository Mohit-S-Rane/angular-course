import { Component, Input } from "@angular/core";
import { Resume } from "src/app/models/resume";

@Component({
    selector: 'app-resume-form',
    templateUrl: 'resume-form.component.html',
    styleUrls: ['resume-form.component.scss']
})

export class ResumeFormComponent{
    @Input() resume: Resume;
    constructor(){}
}