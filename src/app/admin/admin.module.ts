import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TagsPageComponent } from './pages/tags-page/tags-page.component';
import { SharedModule } from '../shared.module';

console.log('Admin module loaded...');

@NgModule({
  declarations: [
    TagsPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
