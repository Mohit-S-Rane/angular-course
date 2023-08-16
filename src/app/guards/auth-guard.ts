import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { ApiService } from "../services/api-service";
import { AuthUtils } from "../utility/auth-utils";

@Injectable()

export class AuthGuard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return !!AuthUtils.getAuthToken();   
    }
}