import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoHomeComponent } from './video-home/video-home.component';


@NgModule({
  declarations: [
    VideoHomeComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule
  ]
})
export class VideoModule { }
