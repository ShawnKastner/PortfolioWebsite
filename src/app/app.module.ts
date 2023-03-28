import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboveTheFoldComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
