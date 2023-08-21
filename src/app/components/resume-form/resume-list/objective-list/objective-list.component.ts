import {Component, Input} from '@angular/core';
import { Objective } from 'src/app/models/objective';

@Component({
    selector: 'app-objective-list',
    templateUrl: 'objective-list.component.html',
    styleUrls: ['objective-list.component.scss']
  })

export class ObjectiveListComponent {
  @Input() objectives: Objective[];

  constructor() {
  }
}