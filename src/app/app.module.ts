import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { ApiserviceService } from './apiservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, LoadingBarRouterModule],
  providers: [ApiserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
