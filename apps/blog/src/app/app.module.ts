import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule, Route } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatureLayoutModule, LayoutComponent } from '@blog/feature-layout';

const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: '@blog/feature-blog#FeatureBlogModule'
      }
    ]
  }
];


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    }),
    BrowserAnimationsModule,
    FeatureLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
