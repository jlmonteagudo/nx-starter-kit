import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { SharedUiMaterialModule } from '@blog/shared/ui-material';

export const featureBlogRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: PostListComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(featureBlogRoutes), SharedUiMaterialModule],
  declarations: [PostListComponent],
  exports: [PostListComponent]
})
export class FeatureBlogModule {}
