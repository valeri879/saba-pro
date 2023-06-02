import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-course-list-page',
  templateUrl: './course-list-page.component.html',
  styleUrls: ['./course-list-page.component.scss']
})
export class CourseListPageComponent implements OnInit, OnDestroy {
  public id!: string;
  public params$!: Observable<Params>;

  private subscription!: Subscription;

  constructor(
    private _route: ActivatedRoute,
    public dataService: DataService
  ) {}

  ngOnInit(): void {
    this.params$ = this._route.params;

/*     this.subscription = this._route.params.subscribe(
      params => {
        this.id = params['id'];
      }
    ); */
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
