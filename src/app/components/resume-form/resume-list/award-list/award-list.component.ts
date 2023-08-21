import {Component, Input} from '@angular/core';
import { AwardsAchivement } from 'src/app/models/awards-achivement';

@Component({
    selector: 'app-award-list',
    templateUrl: 'award-list.component.html',
    styleUrls: ['award-list.component.html']
  })

export class AwardListComponent {
  @Input() awardList: AwardsAchivement[];

  constructor() {
  }
}