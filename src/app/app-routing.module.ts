import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home/home-view/home-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  // {
  //   path: 'news',
  //   loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
  // },
  {
    path: 'video',
    loadChildren: () =>
      import('./video/video.module').then((m) => m.VideoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
