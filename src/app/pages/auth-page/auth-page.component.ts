import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit, OnDestroy {
  
  public counter: number = 0;
  public interval: any;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      console.log(this.counter);
      this.counter++;
    }, 1000);
  };

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
