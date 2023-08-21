import {Component, Input} from '@angular/core';
import { Strength } from 'src/app/models/strength';

@Component({
    selector: 'app-strength-list',
    templateUrl: 'strength-list.component.html',
    styleUrls: ['strength-list.component.scss']
  })

export class StrengthListComponent {
  @Input() strengthList: Strength[];

  constructor() {
  }
}
