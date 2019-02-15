import { BlogAction, BlogActionTypes } from './blog.actions';
import { Post } from '../models/post';

export const BLOG_FEATURE_KEY = 'blog';

/**
 * Interface for the 'Blog' data used in
 *  - BlogState, and
 *  - blogReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity extends Post {}

export interface BlogState {
  list: Entity[]; // list of Blog; analogous to a sql normalized table
  selectedId?: string | number; // which Blog record has been selected
  loaded: boolean; // has the Blog list been loaded
  error?: any; // last none error (if any)
}

export interface BlogPartialState {
  readonly [BLOG_FEATURE_KEY]: BlogState;
}

export const initialState: BlogState = {
  list: [],
  loaded: false
};

export function blogReducer(
  state: BlogState = initialState,
  action: BlogAction
): BlogState {
  switch (action.type) {

    case BlogActionTypes.BlogLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }

    case BlogActionTypes.SelectBlog: {
      state = {
        ...state,
        selectedId: action.payload.id
      };
      break;
    }

  }
  return state;
}
