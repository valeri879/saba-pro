import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrefixPipe } from './pipes/prefix.pipe';



@NgModule({
  declarations: [
    PrefixPipe
  ],
  exports: [
    PrefixPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
