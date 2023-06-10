import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesPageComponent } from '../../pages/categories-page/categories-page.component';
import { SharedModule } from '../shared/shared.module';

console.log(`Categories module loaded...`);

@NgModule({
  declarations: [
    CategoriesPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
