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

  // my component => api service => http service => http client

  constructor(private apiService: ApiService, private alertService: AlertService) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(2)])
    })
    this.apiService.getUsers().subscribe((data) => {
      this.alertService.success('done!')

    }, error=>{
      console.log(error, 'app component');
      
      // this.alertService.error(error.message)
    })
  }

  login() {

  }

  signup() {

  }
}
