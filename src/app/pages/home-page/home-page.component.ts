import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from 'src/app/interfaces/home';
import { DataService } from 'src/app/services/data.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  public data$!: Observable<Home>;

  constructor(
    private _homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.data$ = this._homeService.getData();
  }
}
