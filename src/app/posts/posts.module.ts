import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { IndexComponent } from './index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [IndexComponent, ViewComponent],
  imports: [CommonModule, PostsRoutingModule, FormsModule, ReactiveFormsModule],
})
export class PostsModule {}
