import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPageComponent } from '../../pages/blog-page/blog-page.component';
import { SharedModule } from '../shared/shared.module';
import { PaginationModule } from '../pagination/pagination.module';
import { BlogDetailPageComponent } from '../../pages/blog-detail-page/blog-detail-page.component';


@NgModule({
  declarations: [
    BlogPageComponent,
    BlogDetailPageComponent
  ],
  imports: [
    SharedModule,
    PaginationModule,
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
