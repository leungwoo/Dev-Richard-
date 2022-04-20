import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { CryptoComponent } from './crypto/crypto.component';
import { TechComponent } from './tech/tech.component';
import { NewsHomeComponent } from './news-home/news-home.component';

@NgModule({
  declarations: [CryptoComponent, TechComponent, NewsHomeComponent],
  imports: [CommonModule, NewsRoutingModule],
})
export class NewsModule {}