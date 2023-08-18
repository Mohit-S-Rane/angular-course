import { Component, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Resume } from "src/app/models/resume";
import { ApiService, TEST_TOKEN } from "src/app/services/api-service";
import { log } from 'console';

@Component({
    selector: 'app-on-boarding',
    templateUrl: 'on-boarding.component.html',
    styleUrls: ['on-boarding.component.scss']
})

export class OnBoardingComponent implements OnInit {
    resume: Resume;
    isFirstStepCompleted = true;
    loading = false;

    constructor(private apiService: ApiService, @Inject(TEST_TOKEN) private abc:any) {
        console.log(abc)
    }

    ngOnInit() {
        // this.apiService.fetchAllResumes().subscribe(data => {
        //     if (data.length) {
        //         this.resume = data[0];
        //         this.isFirstStepCompleted = true;
        //         this.loading = false;
        //     }
        // });
        this.isFirstStepCompleted = true;
        this.loading = false;
    }
}