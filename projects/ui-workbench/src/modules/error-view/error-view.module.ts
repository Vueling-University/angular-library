import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorViewComponent } from './error-view/error-view.component';

@NgModule({
  declarations: [ErrorViewComponent],
  imports: [CommonModule],
  exports: [ErrorViewComponent]
})
export class ErrorViewModule {}
