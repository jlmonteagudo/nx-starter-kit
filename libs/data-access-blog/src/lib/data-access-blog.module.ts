import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BlogService } from './services/blog.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BLOG_FEATURE_KEY, initialState as blogInitialState, blogReducer } from './+state/blog.reducer';
import { BlogEffects } from './+state/blog.effects';
import { BlogFacade } from './+state/blog.facade';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(BLOG_FEATURE_KEY, blogReducer, { initialState: blogInitialState }),
    EffectsModule.forFeature([BlogEffects])
  ],
  providers: [
    BlogService,
    BlogFacade
  ]
})
export class DataAccessBlogModule {}
