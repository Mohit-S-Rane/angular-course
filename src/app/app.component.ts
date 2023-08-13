import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, filter, map, Observable, switchMap } from 'rxjs';

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
    const observableA = this.loginForm.valueChanges;
    const observableB = new Observable((emitter) =>{
      emitter.next('hello')
    })
    
  // combine latest used to combine more than observable and listen latest value 
    combineLatest([observableA, observableB]).subscribe((data)=>{
      console.log(data);
    })
  }

  login() {

  }

  signup() { 

  }
}
