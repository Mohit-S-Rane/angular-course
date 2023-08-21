import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api-service';
import { AlertService } from 'src/app/services/alert-service';
import { EmploymentHistory } from 'src/app/models/employment-history';
import { EmploymentHistoryFormComponent } from '../../resume-dialogues/employment-history-form/employment-history-form.component';

@Component({
    selector: 'app-employment-history-card',
    templateUrl: 'employment-history-card.component.html',
    styleUrls: ['employment-history-card.component.scss']
})

export class EmploymentHistoryCardComponent {
    @Input() employmentHistory: EmploymentHistory;

    constructor(private matDialog: MatDialog, private apiService: ApiService, private alertService: AlertService) {}

    edit() {
        this.matDialog.open(EmploymentHistoryFormComponent, {
            width: '90%', height: '90%', data: { employmentHistory: this.employmentHistory }
        });
    }

    delete() {
        // this.apiService.deleteEducation(this.employmentHistory._id)
        //     .subscribe(data => {
        //         this.alertService.success('employmentHistory deleted Successfully');
        //     });
    }
}
