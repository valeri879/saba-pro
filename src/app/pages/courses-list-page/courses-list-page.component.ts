import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-list-page',
  templateUrl: './courses-list-page.component.html',
  styleUrls: ['./courses-list-page.component.scss']
})
export class CoursesListPageComponent implements OnInit {
  public coursesList$!: Observable<any[]>;

  constructor(
    private _couresService: CoursesService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.coursesList$ = this._couresService.getCoursesList(this._route.snapshot.params['id']);
  }
}
