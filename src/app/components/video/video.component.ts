import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent {
  @Input() title: any;
  @Input() desc: any;
  @Input() url: any;
  @Output() editVideo = new EventEmitter();

  onClick() {
    this.editVideo.emit(this.title)
  }
}
