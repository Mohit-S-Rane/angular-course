import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, map, Observable } from 'rxjs';

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
  }

  login() {
    // using Map Operator
    // const mapObserver = this.loginForm.valueChanges.pipe(map(data => {
    //   return data.email
    // }))

    // mapObserver.subscribe((data) => {
    //   console.log(data);
    // })

    // using Filter Operator
    // const filterObserver = this.loginForm.valueChanges.pipe(filter(data => data.email === 'abc@gmail.com'
    // ))

    // filterObserver.subscribe(data =>{
    //   console.log(data);
    // })

  }

  signup() { }
}
