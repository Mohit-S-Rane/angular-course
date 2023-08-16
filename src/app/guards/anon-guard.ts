import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { ApiService } from "../services/api-service";
import { AuthUtils } from "../utility/auth-utils";

@Injectable()

export class AnonGuard implements CanActivate {
    constructor(private route: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        if(!AuthUtils.getAuthToken()){
            return true
        } else {
            // Conditions to navigate after login
                // if verified: false -> verify
                // verified: true & onboarding: 0 -> onboarding
                // verified: true & onboarding: 200 -> dashboard
            this.route.navigate(['verify'])
        }
        // return ApiService.getAuthToken() ? this.route.navigate(['verify']) : true
    }
}