import { BlogLoaded } from './blog.actions';
import { BlogState, Entity, initialState, blogReducer } from './blog.reducer';

describe('Blog Reducer', () => {
  const getBlogId = it => it['id'];
  let createBlog;

  beforeEach(() => {
    createBlog = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Blog actions ', () => {
    it('should return set the list of known Blog', () => {
      const blogs = [createBlog('PRODUCT-AAA'), createBlog('PRODUCT-zzz')];
      const action = new BlogLoaded(blogs);
      const result: BlogState = blogReducer(initialState, action);
      const selId: string = getBlogId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = blogReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
