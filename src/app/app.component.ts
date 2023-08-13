import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-course';
  loginForm: FormGroup
  myObserver: Observable<any>

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(2)])
    })
  }

  login() {
    this.myObserver = new Observable((emitter) => {
      emitter.next(this.loginForm.value)
    })

    this.myObserver.subscribe((data) => {
      console.log(data);
    })
  }

  signup() {
    this.myObserver.subscribe((data) => {
      console.log(data);
    })
  }
}
