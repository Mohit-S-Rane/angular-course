import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertService } from "src/app/services/alert-service";
import { ApiService } from "src/app/services/api-service";


@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent {
    loginForm: FormGroup
    loading = false
  
    // my component => api service => http service => http client
  
    constructor(private apiService: ApiService, private alertService: AlertService, private router: Router) {
      this.loginForm = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(2)]),
      })
    }


    login() { 
        this.loading = true
        // Variable start with $ is indication of observables
        const request$ = this.apiService.login(this.loginForm.value)
        request$.subscribe((data)=>{
          this.loading = false
          console.log(data);
          this.alertService.success('Login Successful')
        }, (error)=>{
          this.loading = false
          console.log(error);
          
        })
      }
    
      signup() {
        this.router.navigate(['signup'])
      }
}