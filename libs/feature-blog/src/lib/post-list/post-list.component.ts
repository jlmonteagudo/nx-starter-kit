import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogService, Post } from '@blog/data-access-blog';
import { Observable } from 'rxjs';
import { MatSelectionList, MatListOption, MatSelectionListChange } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'blog-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @ViewChild(MatSelectionList) postsView: MatSelectionList;

  posts$: Observable<Post[]>;
  selectedPost: Post;

  constructor(private blogService: BlogService) {
    this.posts$ = this.blogService.findAll();
  }

  ngOnInit() {
    this.postsView.selectedOptions = new SelectionModel<MatListOption>(false);
  }

  onPostSelected(event: MatSelectionListChange) {
    this.selectedPost = event.option.value;
  }

}
