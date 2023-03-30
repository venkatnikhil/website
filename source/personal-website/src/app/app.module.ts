import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { NavBarComponent } from './main/nav-bar/nav-bar.component';
import { TestComponent } from './main/test/test.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavBarComponent, TestComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
