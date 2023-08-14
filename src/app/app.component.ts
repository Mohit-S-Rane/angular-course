import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from './services/alert-service';
import { ApiService } from './services/api-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-course';
  loginForm: FormGroup
  loading = false

  // my component => api service => http service => http client

  constructor(private apiService: ApiService, private alertService: AlertService) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(2)]),
      confirm_password: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      experience_level: new FormControl(null, [Validators.required]),
      job_category: new FormControl(null, [Validators.required])
    })
  }

  login() {

  }

  signup() {
    this.loading = true;
    this.apiService.signup(this.loginForm.value).subscribe((data)=>{
      console.log(data); 
      this.loading = false
      this.alertService.success('Signup Successful')
    }, (error)=>{
      this.loading = false
      console.log(error);
    })
    
  }
}
