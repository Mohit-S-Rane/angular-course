import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';
import { ApiService } from 'src/app/services/api-service';

@Component({
  selector: 'app-upload',
  templateUrl: 'upload.componet.html',
  styleUrls: ['upload.componet.scss'],
})
export class UploadComponent implements OnInit, AfterViewInit {
  @ViewChild('myTab') myTag: ElementRef;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log(this.elementRef.nativeElement); 
  }

  constructor(private elementRef: ElementRef) {}
}
