import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { SharedUiMaterialModule } from '@blog/shared/ui-material';
import { PostViewComponent } from './post-view/post-view.component';
import { DataAccessBlogModule } from '@blog/data-access-blog';
import { FlexLayoutModule } from '@angular/flex-layout';

export const featureBlogRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: PostListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(featureBlogRoutes), SharedUiMaterialModule,
    DataAccessBlogModule,
    FlexLayoutModule
  ],
  declarations: [
    PostListComponent,
    PostViewComponent
  ],
  exports: [
    PostListComponent
  ]
})
export class FeatureBlogModule {}
