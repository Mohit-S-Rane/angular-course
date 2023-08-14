import { HttpClient } from '@angular/common/http';
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

  constructor(private htttpClient: HttpClient) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(2)])
    })
    const data: any = {page:2}
    this.htttpClient.get('https://reqres.in/api/users', {params: data}).subscribe((data)=>{
      console.log(data);
    }), (error:any)=>{
      console.log(error);
      
    }
  }

  login() {

  }

  signup() { 

  }
}
