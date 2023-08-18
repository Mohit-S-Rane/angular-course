import { Injectable } from "@angular/core";


console.log('test service is called')

@Injectable({
    providedIn: 'root'
})

export class TestService{
    constructor(){}
}