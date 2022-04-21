import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CoverComponent } from './cover/cover.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { CardsComponent } from './cards/cards.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { SharedModule } from '../shared/shared.module';
import { AchievementsComponent } from './achievements/achievements.component';
@NgModule({
  declarations: [
    CoverComponent,
    HomeViewComponent,
    CardsComponent,
    HobbiesComponent,
    AchievementsComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
