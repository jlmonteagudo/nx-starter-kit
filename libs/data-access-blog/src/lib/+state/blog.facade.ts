import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { BlogPartialState } from './blog.reducer';
import { blogQuery } from './blog.selectors';
import { LoadBlog, SelectBlog } from './blog.actions';
import { Post } from '../models/post';

@Injectable()
export class BlogFacade {
  loaded$ = this.store.pipe(select(blogQuery.getLoaded));
  allBlog$ = this.store.pipe(select(blogQuery.getAllBlog));
  selectedBlog$ = this.store.pipe(select(blogQuery.getSelectedBlog));

  constructor(private store: Store<BlogPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadBlog());
  }

  selectBlog(post: Post) {
    this.store.dispatch(new SelectBlog(post));
  }

}
