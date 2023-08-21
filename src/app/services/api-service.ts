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

      deleteInterest(interestId: string) {
        return this.httpService.delete('/resume/delete/interest/' + interestId);
      }
    
      updateEmploymentHistory(data: any, employmentId: string) {
        return this.httpService.patch('/resume/update/employmentHistory/' + employmentId, data);
      }

      deleteEmploymentHistory(employmentId: string) {
        return this.httpService.delete('/resume/delete/employmentHistory/' + employmentId);
      }

      addInterest(data: any, resumeId: string) {
        return this.httpService.post('/resume/add/interest/' + resumeId, data);
      }
    
      updateInterest(data: any, interestId: string) {
        return this.httpService.patch('/resume/update/interest/' + interestId, data);
      }
    
      addSkill(data: any, resumeId: string) {
        return this.httpService.post('/resume/add/skill/' + resumeId, data);
      }
    
      updateSkill(data: any, skillId: string) {
        return this.httpService.patch('/resume/update/skill/' + skillId, data);
      }
    
      deleteSkill(skillId: string) {
        return this.httpService.delete('/resume/delete/skill/' + skillId);
      }
    
      addLanguage(data: any, resumeId: string) {
        return this.httpService.post('/resume/add/language/' + resumeId, data);
    
      }
    
      updateLanguage(data: any, languageId: string) {
        return this.httpService.patch('/resume/update/language/' + languageId, data);
      }
    
      deleteLanguage(languageId: string) {
        return this.httpService.delete('/resume/delete/language/' + languageId);
      }
    
      addIndustrialExposure(data: any, resumeId: string) {
        return this.httpService.post('/resume/add/industrialExposure/' + resumeId, data);
      }
    
      updateIndustrialExposure(data: any, industrialExposureId: string) {
        return this.httpService.patch('/resume/update/industrialExposure/' + industrialExposureId, data);
      }
    
      deleteIndustrialExposure(industrialExposureId: string) {
        return this.httpService.delete('/resume/delete/industrialExposure/' + industrialExposureId);
      }
    
      addAward(data: any, resumeId: string) {
        return this.httpService.post('/resume/add/award/' + resumeId, data);
      }
    
      updateAward(data: any, awardId: string) {
        return this.httpService.patch('/resume/update/awardAchivements/' + awardId, data);
      }
    
      deleteAward(awardId: string) {
        return this.httpService.delete('/resume/delete/awardAchivements/' + awardId);
      }
    
      addObjective(data: any, resumeId: string) {
        return this.httpService.post('/resume/add/objective/' + resumeId, data);
      }
    
      updateObjective(data: any, objectiveId: string) {
        return this.httpService.patch('/resume/update/objective/' + objectiveId, data);
      }
    
      deleteObjective(objectiveId: string) {
        return this.httpService.delete('/resume/delete/objective/' + objectiveId);
      }
    
      addReference(data: any, resumeId: string) {
        return this.httpService.post('/resume/add/refrence/' + resumeId, data);
      }
    
      updateReference(data: any, referenceId: string) {
        return this.httpService.patch('/resume/update/refrence/' + referenceId, data);
      }
    
      deleteReference(referenceId: string) {
        return this.httpService.delete('/resume/delete/refrence/' + referenceId);
      }
    
      addProjectDetail(data: any, resumeId: string) {
        return this.httpService.post('/resume/add/projectDetail/' + resumeId, data);
      }
    
      updateProjectDetail(data: any, projectDetailId: string) {
        return this.httpService.patch('/resume/update/projectDetail/' + projectDetailId, data);
      }
    
      deleteProjectDetail(projectDetailId: string) {
        return this.httpService.delete('/resume/delete/projectDetail/' + projectDetailId);
      }
    
      addStrength(data: any, resumeId: string) {
        return this.httpService.post('/resume/add/strength/' + resumeId, data);
      }
    
      updateStrength(data: any, strengthId: string) {
        return this.httpService.patch('/resume/update/strength/' + strengthId, data);
      }
    
      deleteStrength(strengthId: string) {
        return this.httpService.delete('/resume/delete/strength/' + strengthId);
      }
    
      addWeakness(data: any, resumeId: string) {
        return this.httpService.post('/resume/add/weakness/' + resumeId, data);
      }
    
      deleteWeakness(weaknessId: string) {
        return this.httpService.delete('/resume/delete/weakness/' + weaknessId);
      }
    
      updateWeakness(data: any, weaknessId: string) {
        return this.httpService.patch('/resume/update/weakness/' + weaknessId, data);
      }
} 

export const TEST_TOKEN = new InjectionToken('test_token')