import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs";
import { AlertService } from "./alert-service";
import { throwError } from "rxjs";


@Injectable()
export class HttpService {
    private baseURL = 'https://reqres.in/api'
    constructor(private httpClient: HttpClient, private alertService: AlertService) {
    }

    get(url: string, paramData?: any) {
        const data = { params: paramData }
        return this.httpClient.get(this.baseURL + url, data).pipe(catchError(this.errorHandler.bind(this)))
    }

    private errorHandler(response: any) {
        const error = response.error
        const keys = Object.keys(error);
        const key = keys[0]
        const message = response.message
        const status = response.status

        if (status === 401) {
            // redirect to login page
        }
        if(key === 'isTrusted'){
            this.alertService.error('Please connect to internet connection')
        } else {
            this.alertService.error(message)
        }

        return throwError({message, error})
    }
}