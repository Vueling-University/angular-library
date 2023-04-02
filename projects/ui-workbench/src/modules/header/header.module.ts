import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponentComponent],
})
export class HeaderModule { }
