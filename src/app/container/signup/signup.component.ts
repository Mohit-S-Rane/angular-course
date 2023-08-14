import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertService } from "src/app/services/alert-service";
import { ApiService } from "src/app/services/api-service";


@Component({
    selector: 'app-signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.scss']
})

export class SignupComponent {
    loginForm: FormGroup
    loading = false
  
    // my component => api service => http service => http client
  
    constructor(private apiService: ApiService, private alertService: AlertService, private router: Router) {
      this.loginForm = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(2)]),
        confirm_password: new FormControl(null, [Validators.required]),
        name: new FormControl(null, [Validators.required]),
        job_category: new FormControl(null, [Validators.required]),
        experience_level: new FormControl(null, [Validators.required]),
      })
    }
    
      signup() {
        this.loading = true;
        this.apiService.signup(this.loginForm.value).subscribe((data)=>{
          this.loading = false
          this.router.navigate(['login'])
          this.alertService.success('Signup Successful')
        }, (error)=>{
          this.loading = false
        })
        
      }

      backToLogin(){
        this.router.navigate(['login'])
      }
}