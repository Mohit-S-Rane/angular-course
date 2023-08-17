import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../services/api-service';
import { map } from 'rxjs';

@Injectable()
export class VerificationInCompleted implements CanActivate{
    constructor(private apiService: ApiService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return false
        // return this.apiService.fetchMe().pipe(map((data)=>{
        //     if(!data.verified){
        //         return true
        //     } else {
        //         this.router.navigate(['dashboard'])
        //         return false
        //     }
        // }))
    }
}