import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { User } from "../models/user";
import { HttpService } from "./http-service";
import { AuthUtils } from "../utility/auth-utils";
import { Resume } from "../models/resume";
import { InjectionToken } from '@angular/core'; 

@Injectable()
export class ApiService {
    constructor(private httpService: HttpService) { }

    signup(data: { email: string, password: string, confirm_password: string, name: string, job_category: string, experience_level: string }): Observable<User> {
        return this.httpService.post('/user/signup', data)
    }

    loginAndSetToken(data: { email: string, password: string }): Observable<User> {
        return this.httpService.get('/user/login', data).pipe(map((res) => {
            AuthUtils.setAuthToken(res.token)
            return res.user
        }))
    }

    sendResetPasswordEmail(data: { email: string }): Observable<any> {
        return this.httpService.get('/user/reset/password/email', data)
    }

    resetPassword(data: { code: string, new_password: string, confirm_password: string }): Observable<any> {
        return this.httpService.get('/user/reset/password', data)
    }

    fetchMe(): Observable<User> {
        return this.httpService.get('/user/fetch')
    }

    fetchAllResumes(): Observable<Resume[]> {
        return this.httpService.get('/resume/all');
    }

    saveResume(data: { name: string }) {
        return this.httpService.post('/resume/add/resume', data);
    }

    saveOrUpdateImage(image: File, resumeId: string): Observable<Resume> {
        const formData = new FormData();
        formData.append('profile_image', image);
        return this.httpService.post('/resume/add/image/' + resumeId, formData);
      }
    
      deleteImage(resumeId: string) {
        return this.httpService.delete('/resume/delete/image/' + resumeId);
      }
    
      addVideo(resumeId: string, data: { video_url: string }) {
        return this.httpService.patch('/resume/import/video/' + resumeId, data);
      }
    
      updateContactDetails(contactDetailId: string, data:any) {
        return this.httpService.patch('/resume/update/contactDetails/' + contactDetailId, data);
      }
    
      addContactDetails(resumeId: string, data:any) {
        console.log('view data', data);
        console.log('view resumeId', resumeId);
        
        return this.httpService.post('/resume/add/contactDetails/' + resumeId, data);
      }
      addEducation(resumeId: string, data:any) {
        return this.httpService.post('/resume/add/education/' + resumeId, data);
      }
    
      updateEducation(educationId: string, data:any) {
        return this.httpService.patch('/resume/add/education/' + educationId, data);
      }

      deleteEducation(educationId: string) {
        return this.httpService.delete('/resume/delete/education/' + educationId);
      }

      addEmploymentHistory(data: any, resumeId: string) {
        return this.httpService.post('/resume/add/employmentHistory/' + resumeId, data);
      }
    
      updateEmploymentHistory(data: any, employmentId: string) {
        return this.httpService.patch('/resume/update/employmentHistory/' + employmentId, data);
      }
} 

export const TEST_TOKEN = new InjectionToken('test_token')