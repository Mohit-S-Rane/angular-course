import { Component, Input } from '@angular/core';
import { Education } from 'src/app/models/education';
import { MatDialog } from '@angular/material/dialog';
import { EducationFormComponent } from '../../resume-dialogues/education-form/education-form.component';
import { ApiService } from 'src/app/services/api-service';
import { AlertService } from 'src/app/services/alert-service';

@Component({
    selector: 'app-education-card',
    templateUrl: 'education-card.component.html',
    styleUrls: ['education-card.component.scss']
})

export class EducationCardComponent {
    @Input() education: Education;

    constructor(private matDialog: MatDialog, private apiService: ApiService, private alertService: AlertService) {}

    edit() {
        this.matDialog.open(EducationFormComponent, {
            width: '90%', height: '90%', data: { education: this.education }
        });
    }

    delete() {
        this.apiService.deleteEducation(this.education._id)
            .subscribe(data => {
                this.alertService.success('education deleted Successfully');
            });
    }
}
