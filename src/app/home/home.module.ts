import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CoverComponent } from './cover/cover.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { CardsComponent } from './cards/cards.component';
@NgModule({
  declarations: [CoverComponent, HomeViewComponent, CardsComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
