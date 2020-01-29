import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCarouselComponent } from './modules/home-carousel/home-carousel.component';
import { HomeHeaderComponent } from './modules/home-header/home-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { WelcomePageComponent } from './modules/welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeCarouselComponent,
    HomeHeaderComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
