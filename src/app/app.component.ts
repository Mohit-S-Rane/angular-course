import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, map, Observable, switchMap } from 'rxjs';

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
    this.buySugarFromShop()
  }

  buySugerInBulk () {
    return new Observable(emitter => {
      emitter.next('Sugar is purchased..')
    })
  }

  buySugarInQuantity(quantity:any) {
    return new Observable(emitter => {
      emitter.next('Sugar with Quantity: ' + quantity + ' is here for you')
    })
  }

  buySugarFromShop(){
    const newObserver = this.buySugerInBulk().pipe(switchMap(()=> {
      return this.buySugarInQuantity('1kg')
    }))
  
    newObserver.subscribe((data)=>{
      console.log(data);
      
    })
  
  
  }






  login() {
  }

  signup() { }
}
