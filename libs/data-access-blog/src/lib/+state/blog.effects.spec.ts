import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { BlogEffects } from './blog.effects';
import { LoadBlog, BlogLoaded } from './blog.actions';

describe('BlogEffects', () => {
  let actions: Observable<any>;
  let effects: BlogEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        BlogEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(BlogEffects);
  });

  describe('loadBlog$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadBlog() });
      expect(effects.loadBlog$).toBeObservable(
        hot('-a-|', { a: new BlogLoaded([]) })
      );
    });
  });
});
