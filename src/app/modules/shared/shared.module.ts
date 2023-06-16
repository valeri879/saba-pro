import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';
import { ShortDescrPipe } from '../../pipes/short-descr.pipe';



@NgModule({
  declarations: [
    CardComponent,
    ShortDescrPipe,
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
