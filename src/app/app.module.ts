import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule, FooterModule, BreadcrumbModule } from 'projects/ui-workbench/src/public-api';
import { TranslatingComponent } from './translating/translating.component';

@NgModule({
  declarations: [AppComponent, TranslatingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    BreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
