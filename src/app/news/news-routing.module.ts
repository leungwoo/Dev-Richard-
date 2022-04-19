import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsHomeComponent } from './news-home/news-home.component';

const routes: Routes = [{ path: '', component: NewsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
