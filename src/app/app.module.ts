import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { PricePipe } from './pipes/price.pipe';
import { HoverDirective } from './directives/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PricePipe,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
