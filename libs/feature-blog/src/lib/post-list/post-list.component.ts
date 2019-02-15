import { Component, OnInit, ViewChild } from '@angular/core';
import { Post, BlogFacade } from '@blog/data-access-blog';
import { Observable } from 'rxjs';
import { MatSelectionList, MatListOption, MatSelectionListChange } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'blog-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @ViewChild('postsView') selectionList: MatSelectionList;

  posts$: Observable<Post[]>;
  selectedPost$: Observable<Post>;

  constructor(private blogFacade: BlogFacade) {
    this.blogFacade.loadAll();
    this.posts$ = this.blogFacade.allBlog$
    this.selectedPost$ = this.blogFacade.selectedBlog$;
  }

  ngOnInit() {
    this.selectionList.selectedOptions = new SelectionModel<MatListOption>(false);
  }

  onPostSelected(event: MatSelectionListChange) {
    this.blogFacade.selectBlog(event.option.value);
  }

}
