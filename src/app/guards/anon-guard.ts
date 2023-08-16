import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { ApiService } from "../services/api-service";
import { AuthUtils } from "../utility/auth-utils";
import { map } from "rxjs";

@Injectable()

export class AnonGuard implements CanActivate {
    constructor(private router: Router, private apiService: ApiService) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        if(!AuthUtils.getAuthToken()){
            return true
        } else {
            return this.apiService.fetchMe().pipe(map((data)=>{
                this.router.navigate(['dashboard'])
                // if(!data.verified){
                //     this.router.navigate(['verify'])
                // } else if(data.onboarding !== 200){
                //     this.router.navigate(['on-boarding'])
                // } else {
                //     this.router.navigate(['dashboard'])
                // }
            }))
            // this.route.navigate(['verify'])
            // Conditions to navigate after login
                // if verified: false -> verify
                // verified: true & onboarding: 0 -> onboarding
                // verified: true & onboarding: 200 -> dashboard
        }
        // return ApiService.getAuthToken() ? this.route.navigate(['verify']) : true
    }
}