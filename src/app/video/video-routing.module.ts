import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoHomeComponent } from './video-home/video-home.component';

const routes: Routes = [{ path: '', component: VideoHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoRoutingModule {}
