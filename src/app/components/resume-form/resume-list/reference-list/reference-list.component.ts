import {Component, Input} from '@angular/core';
import { Refrence } from 'src/app/models/refrence';

@Component({
    selector: 'app-reference-list',
    templateUrl: 'reference-list.component.html',
    styleUrls: ['reference-list.component.scss']
  })

export class ReferenceListComponent {
  @Input() referenceList: Refrence[];

  constructor() {
  }
}
