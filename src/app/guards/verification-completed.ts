import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../services/api-service';
import { map } from 'rxjs';

@Injectable()
export class VerificationCompleted implements CanActivate{
    constructor(private apiService: ApiService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return true
        // return this.apiService.fetchMe().pipe(map((data)=>{
        //     if(data.verified){
        //         console.log('verification completed');
        //         return true
        //     } else {
        //         this.router.navigate(['verify'])
        //         return false
        //     }
        // }))
    }
}