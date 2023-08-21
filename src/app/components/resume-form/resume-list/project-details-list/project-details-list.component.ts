import {Component, Input} from '@angular/core';
import { ProjectDetail } from 'src/app/models/project-detail';

@Component({
    selector: 'app-project-details-list',
    templateUrl: 'project-details-list.component.html',
    styleUrls: ['project-details-list.component.scss']
  })

export class ProjectDetailsListComponent {
  @Input() projectDetailList: ProjectDetail[];

  constructor() {
  }
}
