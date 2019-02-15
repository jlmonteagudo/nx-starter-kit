import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { BlogPartialState } from './blog.reducer';
import {
  LoadBlog,
  BlogLoaded,
  BlogLoadError,
  BlogActionTypes
} from './blog.actions';
import { BlogService } from '../services/blog.service';
import { map } from 'rxjs/operators';

@Injectable()
export class BlogEffects {
  @Effect()
  loadBlog$ = this.dataPersistence.fetch(BlogActionTypes.LoadBlog, {
    run: (action: LoadBlog, state: BlogPartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...

      return this.blogService.findAll().pipe(
        map(data => new BlogLoaded(data))
      );

      //return new BlogLoaded([]);
    },

    onError: (action: LoadBlog, error) => {
      console.error('Error', error);
      return new BlogLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<BlogPartialState>,
    private blogService: BlogService
  ) {}
}
