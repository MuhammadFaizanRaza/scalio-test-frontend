import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  form!: FormGroup;
  errorMessage!: string;
  constructor(public postService: PostsService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
    });
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    this.errorMessage = '';
    this.postService.getOne(this.form.value.id).subscribe(
      (res: { data: { post: Post } }) => {
        this.router.navigate(['posts/view'], { state: res.data.post });
      },
      (error) => {
        //Error callback
        this.errorMessage = error.includes('404 Not Found')
          ? 'Id not found'
          : '';

        throw error;
      }
    );
  }
}
