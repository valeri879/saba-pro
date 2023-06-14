import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPageComponent } from '../../pages/blog-page/blog-page.component';
import { SharedModule } from '../shared/shared.module';
import { PaginationModule } from '../pagination/pagination.module';


@NgModule({
  declarations: [
    BlogPageComponent
  ],
  imports: [
    SharedModule,
    PaginationModule,
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
