import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import {
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective
} from './accordion';
import { MenuItems } from './menu-items/menu-items';
import { AppHeaderComponent } from './layout/header/header.component';
import { SpinnerComponent } from './spinner.component';
import { AppSidebarComponent } from './layout/sidebar/sidebar.component';
import { SharedUiMaterialModule } from '@blog/shared/ui-material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedUiMaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    LayoutComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent
  ],
  exports: [
    LayoutComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  providers: [MenuItems]
})
export class FeatureLayoutModule {}
