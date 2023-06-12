import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseDetailRoutingModule } from './course-detail-routing.module';
import { CourseDetailPageComponent } from '../../pages/course-detail-page/course-detail-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CourseDetailPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CourseDetailRoutingModule
  ]
})
export class CourseDetailModule { }
