import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';



@NgModule({
  declarations: [
    CardComponent,
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
