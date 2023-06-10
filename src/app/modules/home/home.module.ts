import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';

console.log(`Home module loaded...`);

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
