import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'მთავარი გვერდი' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
