import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectHomeComponent } from './project-home/project-home.component';
import { ProjectWorkComponent } from './project-work/project-work.component';

@NgModule({
  declarations: [ProjectHomeComponent, ProjectWorkComponent],
  imports: [CommonModule, ProjectsRoutingModule, SharedModule],
})
export class ProjectsModule {}
