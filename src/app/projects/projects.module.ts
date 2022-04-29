import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectHomeComponent } from './project-home/project-home.component';

@NgModule({
  declarations: [ProjectHomeComponent],
  imports: [CommonModule, ProjectsRoutingModule, SharedModule],
})
export class ProjectsModule {}
