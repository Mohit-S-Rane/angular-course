import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { ApiService } from "../services/api-service";

@Injectable()

export class AnonGuard implements CanActivate {
    constructor(private route: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return !ApiService.getAuthToken()
        // return ApiService.getAuthToken() ? this.route.navigate(['verify']) : true
    }
}