import {Component, Input} from '@angular/core';
import { Weakness } from 'src/app/models/weakness';

@Component({
    selector: 'app-weakness-list',
    templateUrl: 'weakness-list.component.html',
    styleUrls: ['weakness-list.component.scss']
  })

export class WeaknessListComponent {
  @Input() weaknessList: Weakness[];

  constructor() {
  }
}