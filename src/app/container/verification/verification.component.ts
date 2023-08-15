import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";

@Component({
    selector: 'app-verfication',
    templateUrl: 'verification.component.html',
    styleUrls: ['verification.component.scss']
})

export class VerificationComponent{
    email: string
    constructor(private activatedRoute: ActivatedRoute){
        this.fetchEmail()
    }
    
    fetchEmail(){
        const email$ = this.activatedRoute.queryParams.pipe(map((data)=> data['email']))
        email$.subscribe((data)=>{
            this.email = data
        })
    }
}