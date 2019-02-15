import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BLOG_FEATURE_KEY, BlogState } from './blog.reducer';

// Lookup the 'Blog' feature state managed by NgRx
const getBlogState = createFeatureSelector<BlogState>(BLOG_FEATURE_KEY);

const getLoaded = createSelector(
  getBlogState,
  (state: BlogState) => state.loaded
);
const getError = createSelector(
  getBlogState,
  (state: BlogState) => state.error
);

const getAllBlog = createSelector(
  getBlogState,
  getLoaded,
  (state: BlogState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getBlogState,
  (state: BlogState) => state.selectedId
);
const getSelectedBlog = createSelector(
  getAllBlog,
  getSelectedId,
  (blog, id) => {
    const result = blog.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const blogQuery = {
  getLoaded,
  getError,
  getAllBlog,
  getSelectedBlog
};
