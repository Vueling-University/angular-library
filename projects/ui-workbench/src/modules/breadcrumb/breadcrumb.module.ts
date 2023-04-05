import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
// import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [CommonModule,
    // AppRoutingModule
  ],
  exports: [BreadcrumbComponent],
})
export class BreadcrumbModule {
  @Input() importRoute: string | undefined;
}
