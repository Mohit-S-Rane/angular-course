import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, filter, map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-course';
  loginForm: FormGroup
  mySubject = new BehaviorSubject('hello')

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(2)])
    })
  }

  login() {
    this.mySubject.next(this.loginForm.value)
  }

  signup() { 
    // this.mySubject.subscribe((data)=>{
    //   console.log(data);
    // })

    console.log(this.mySubject.getValue());  
    // Get value return last value
  }
}
