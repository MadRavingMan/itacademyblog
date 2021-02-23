import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from "../shared/post";
import { postList } from '../shared/post-list';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  @Input() post: Post;
  posts: Post[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.posts = postList;
    const id = this.route.snapshot.paramMap.get('id');
    this.post = this.posts.find(post => post.id === id);
  }

}
