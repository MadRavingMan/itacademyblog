import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  addLike(post: Post) {
    this.postService.addLike(post);
  }

  removeLike(post: Post){
    this.postService.removeLike(post);
  }
}
