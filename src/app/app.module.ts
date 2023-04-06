import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {
  FooterModule,
  BreadcrumbModule,
} from 'projects/ui-workbench/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FooterModule, BreadcrumbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
