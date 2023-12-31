import {Component, Input} from '@angular/core';
import { IndustrialExposure } from 'src/app/models/industrial-exposure';

@Component({
    selector: 'app-industrial-exposure-list',
    templateUrl: 'industrial-exposure-list.component.html',
    styleUrls: ['industrial-exposure-list.component.scss']
  })

export class IndustrialExposureListComponent {
  @Input() industrialExposureList: IndustrialExposure[];

  constructor() {
  }
}
