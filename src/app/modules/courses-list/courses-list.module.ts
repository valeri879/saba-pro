import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListRoutingModule } from './courses-list-routing.module';
import { CoursesListPageComponent } from '../../pages/courses-list-page/courses-list-page.component';
import { SharedModule } from '../shared/shared.module';

console.log(`Courses list loaded`);

@NgModule({
  declarations: [
    CoursesListPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CoursesListRoutingModule
  ]
})
export class CoursesListModule { }
