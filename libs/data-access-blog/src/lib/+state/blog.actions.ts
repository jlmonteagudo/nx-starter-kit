import { Action } from '@ngrx/store';
import { Entity } from './blog.reducer';

export enum BlogActionTypes {
  LoadBlog = '[Blog] Load Blog',
  BlogLoaded = '[Blog] Blog Loaded',
  BlogLoadError = '[Blog] Blog Load Error',
  SelectBlog = '[Blog] Select Blog'
}

export class LoadBlog implements Action {
  readonly type = BlogActionTypes.LoadBlog;
}

export class BlogLoadError implements Action {
  readonly type = BlogActionTypes.BlogLoadError;
  constructor(public payload: any) {}
}

export class BlogLoaded implements Action {
  readonly type = BlogActionTypes.BlogLoaded;
  constructor(public payload: Entity[]) {}
}

export class SelectBlog implements Action {
  readonly type = BlogActionTypes.SelectBlog;
  constructor(public payload: Entity) {}
}

export type BlogAction = LoadBlog | BlogLoaded | BlogLoadError | SelectBlog;

export const fromBlogActions = {
  LoadBlog,
  BlogLoaded,
  BlogLoadError,
  SelectBlog
};
