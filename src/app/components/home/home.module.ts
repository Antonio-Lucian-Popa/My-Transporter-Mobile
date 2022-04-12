import { SharedModule } from './../../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FilterComponent } from './filter/filter.component';
import { PostComponent } from './post/post.component';
import { ListItemProfileComponent } from './list-item-profile/list-item-profile.component';


@NgModule({
  declarations: [
    HomeComponent,
    TopNavComponent,
    FilterComponent,
    PostComponent,
    ListItemProfileComponent,
    ListItemProfileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatTabsModule
  ]
})
export class HomeModule { }
