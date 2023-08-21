import {Component, Input} from '@angular/core';
import { EmploymentHistory } from 'src/app/models/employment-history';
import {Education} from '../../../../models/education';

@Component({
    selector: 'app-employment-history-list',
    templateUrl: 'employment-history-list.component.html',
    styleUrls: ['employment-history-list.component.scss']
})

export class EmploymentHistoryListComponent {
  @Input() employmentHistoryList: EmploymentHistory[];

  constructor() {
  }
}