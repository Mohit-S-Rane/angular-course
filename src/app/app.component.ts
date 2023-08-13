import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, debounceTime, distinctUntilChanged, filter, map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-course';
  loginForm: FormGroup

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(2)])
    })
    const observer = this.loginForm.valueChanges.pipe(map(data => data.email), debounceTime(500), distinctUntilChanged())
    observer.subscribe((data)=>{
      console.log(data);
      
    })
  }

  login() {

  }

  signup() { 

  }
}
