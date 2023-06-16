import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Blog } from 'src/app/interfaces/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-detail-page',
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.scss']
})
export class BlogDetailPageComponent implements OnInit {

  private _blogService = inject(BlogService);
  private _route = inject(ActivatedRoute);

  public blog$!: Observable<Blog>;

  ngOnInit(): void {
    this.blog$ = this._route.params.pipe(
      switchMap(params => this._blogService.getBlog(params['id']))
    );
  }
}
