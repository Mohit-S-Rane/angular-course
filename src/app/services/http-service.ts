import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { AlertService } from "./alert-service";
import { throwError } from "rxjs";


@Injectable()
export class HttpService {
    private baseURL = 'http://localhost:5000/api'
    constructor(private httpClient: HttpClient, private alertService: AlertService) {
    }

    get(url: string, paramData?: any): Observable<any> {
        const data = { params: paramData }
        return this.httpClient.get(this.baseURL + url, data).pipe(catchError(this.errorHandler.bind(this)))
    }

    post(url: string, body: any): Observable<any>{
        return this.httpClient.post(this.baseURL + url, body).pipe(catchError(this.errorHandler.bind(this)))
    }

    patch(url: string, body: any): Observable<any>{
        return this.httpClient.patch(this.baseURL + url, body).pipe(catchError(this.errorHandler.bind(this)))
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