import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { IndustrialExposure } from 'src/app/models/industrial-exposure';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { IndustrialExposureFormComponent } from '../../resume-dialogues/industrial-exposure-form/industrial-exposure-form.component';

@Component({
    selector: 'app-industrial-exposure-card',
    templateUrl: 'industrial-exposure-card.component.html',
    styleUrls: ['industrial-exposure-card.component.scss']
  })

export class IndustrialExposureCardComponent {
  @Input() industrialExposure: IndustrialExposure;

  constructor(private dialog: MatDialog, private apiService: ApiService, private alertService: AlertService) {
  }

  edit() {
    const dialogRef = this.dialog.open(IndustrialExposureFormComponent, {
      disableClose: true,
      data: {industrialExposure: this.industrialExposure}
    });
    dialogRef.updateSize('90%', '90%');
  }

  delete() {
    this.apiService.deleteIndustrialExposure(this.industrialExposure._id)
      .subscribe(data => {
        this.alertService.success('industrialExposure deleted Successfully');
      });
  }
}
