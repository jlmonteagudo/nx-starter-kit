import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { BlogEffects } from './blog.effects';
import { BlogFacade } from './blog.facade';

import { blogQuery } from './blog.selectors';
import { LoadBlog, BlogLoaded } from './blog.actions';
import { BlogState, Entity, initialState, blogReducer } from './blog.reducer';

interface TestSchema {
  blog: BlogState;
}

describe('BlogFacade', () => {
  let facade: BlogFacade;
  let store: Store<TestSchema>;
  let createBlog;

  beforeEach(() => {
    createBlog = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('blog', blogReducer, { initialState }),
          EffectsModule.forFeature([BlogEffects])
        ],
        providers: [BlogFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(BlogFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allBlog$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allBlog$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `BlogLoaded` to manually submit list for state management
     */
    it('allBlog$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allBlog$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(new BlogLoaded([createBlog('AAA'), createBlog('BBB')]));

        list = await readFirst(facade.allBlog$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
