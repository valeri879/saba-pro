import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-detail-page',
  templateUrl: './course-detail-page.component.html',
  styleUrls: ['./course-detail-page.component.scss']
})
export class CourseDetailPageComponent implements OnInit {
  public course$!: Observable<any>;
  public similarCourses$!: Observable<any[]>;

  constructor(
    private _coursesService: CoursesService,
    private _route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    const obj1 = {
      name: 'VAl'
    };

    const obj2 = {
      lastName: 'Do'
    };

    const obj3 = {
    /*
      name: 'VAl',
      lastName: 'Do'
    */
      ...obj1,
      ...obj2
    }


/*     let id: any;
    let course: any;
    let similarCourses: any;
    // ვიჭერთ დეტალური კურსის ID url-დან
    this._route.params.subscribe(
      params => {
        id = params['id'];
      }
    );
    // მოგვაქვს დეტალური კურსი
    this._coursesService.getCourse(id).subscribe(
      res => {
        course = res;
      }
    );
    // მოგვაქვს მსგავსი კურსების სია
    this._coursesService.getCoursesList(course.category).subscribe(
      res => {
        similarCourses = res;
      }
    );
    let finalData = {
      ...course,
      ...similarCourses,
    } */

    // const myFunc = () => 5;
    // const myFunc = () => {
    //   return 5;
    // }

    this.course$ = this._route.params.pipe(
      switchMap(params => this._coursesService.getCourse(params['id']).pipe(
        switchMap(course => this._coursesService.getCoursesList(course['category']).pipe(
          map(coursesList => {
            return {
              similarCourse: coursesList,
              ...course
            }
          }),
          tap(res => console.log(res))
        )),
      ))
    );
  }
  
}
