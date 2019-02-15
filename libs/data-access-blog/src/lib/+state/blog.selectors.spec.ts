import { Entity, BlogState } from './blog.reducer';
import { blogQuery } from './blog.selectors';

describe('Blog Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getBlogId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createBlog = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      blog: {
        list: [
          createBlog('PRODUCT-AAA'),
          createBlog('PRODUCT-BBB'),
          createBlog('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Blog Selectors', () => {
    it('getAllBlog() should return the list of Blog', () => {
      const results = blogQuery.getAllBlog(storeState);
      const selId = getBlogId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedBlog() should return the selected Entity', () => {
      const result = blogQuery.getSelectedBlog(storeState);
      const selId = getBlogId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = blogQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = blogQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
