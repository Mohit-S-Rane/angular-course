import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { ApiService } from "../services/api-service";
import { AuthUtils } from "../utility/auth-utils";

@Injectable()

export class AnonGuard implements CanActivate {
    constructor(private route: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return !AuthUtils.getAuthToken()
        // return ApiService.getAuthToken() ? this.route.navigate(['verify']) : true
    }
}