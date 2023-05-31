import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-list-page',
  templateUrl: './course-list-page.component.html',
  styleUrls: ['./course-list-page.component.scss']
})
export class CourseListPageComponent implements OnInit {
  public id!: string;

  constructor(
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    console.log(this._route.snapshot.params);
  }
}
