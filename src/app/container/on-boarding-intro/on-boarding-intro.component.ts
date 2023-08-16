import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-on-boarding-intro',
    templateUrl: 'on-boarding-intro.component.html',
    styleUrls: ['on-boarding-intro.component.scss']
})

export class OnBoardingIntroComponent implements OnInit, OnChanges, DoCheck{
    constructor(){}
    ngOnInit(): void {
        console.log('Called ng on init');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        
    }

    ngDoCheck(): void {
        console.log('called');
        
    }
}