import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { ApiService } from "src/app/services/api-service";

@Component({
    selector: 'app-verfication',
    templateUrl: 'verification.component.html',
    styleUrls: ['verification.component.scss']
})

export class VerificationComponent{
    email: string
    constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService){
        this.fetchEmail()
    }
    
    fetchEmail(){
        this.apiService.fetchMe().subscribe((data)=>{
            this.email = data.email;
        })
        const email$ = this.activatedRoute.queryParams.pipe(map((data)=> data['email']))
        email$.subscribe((data)=>{
            this.email = data
        })
    }
}