import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { User } from "../models/user";
import { HttpService } from "./http-service";

@Injectable()
export class ApiService {
    private static authToken = 'auth token';
    constructor(private httpService: HttpService) { }

    static getAuthToken() {
        return localStorage.getItem(ApiService.authToken)
    }

    static setAuthToken(value: any) {
        localStorage.setItem(ApiService.authToken, value)
    }

    static removeAuthToken() {
        localStorage.removeItem(ApiService.authToken)
    }

    signup(data: { email: string, password: string, confirm_password: string, name: string, job_category: string, experience_level: string }): Observable<User> {
        return this.httpService.post('/user/signup', data)
    }

    loginAndSetToken(data: { email: string, password: string }): Observable<User> {
        return this.httpService.get('/user/login', data).pipe(map((res) => {
            ApiService.setAuthToken(res.token)
            return res.user
        }))
    }

    sendResetPasswordEmail(data: { email: string }): Observable<any> {
        return this.httpService.get('/user/reset/password/email', data)
    }

    resetPassword(data: { code: string, new_password: string, confirm_password: string }): Observable<any> {
        return this.httpService.get('/user/reset/password', data)
    }
} 