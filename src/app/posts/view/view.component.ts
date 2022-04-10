import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent {
  post!: Post;
  constructor(private router: Router) {
    if (!this.router.getCurrentNavigation()?.extras?.state) {
      this.router.navigateByUrl('posts');
    }
    this.post = this.router.getCurrentNavigation()?.extras?.state as Post;
  }
}
