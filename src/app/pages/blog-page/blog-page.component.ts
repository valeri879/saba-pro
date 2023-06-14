import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Blog } from 'src/app/interfaces/blog';
import { Pagination } from 'src/app/interfaces/pagination';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit, OnDestroy {

  public blogList: Blog[] | undefined = [];
  public pagination!: Pagination;

  private _blogService = inject(BlogService);
  private _route = inject(ActivatedRoute);

  private _subscription!: Subscription;

  ngOnInit(): void {
    this._route.queryParams.subscribe(
      params => {
        this._initData(params);
      }
    );
  }

  private _initData(params?: any) {
    this._subscription = this._blogService.getBlogs(params).subscribe(
      res => {
        this.blogList = res.data;
        delete res.data;
        this.pagination = res;
      }
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }
}
