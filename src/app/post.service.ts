import { Injectable } from '@angular/core';
import { Post } from './shared/post';
import { postList } from './shared/post-list';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readOnly: string = 'http://localhost:3000/posts';
  private readOnly2: string =
    'http://newsapi.org/v2/everything?q=angular&from=2021-02-21&to=2021-02-21&sortBy=popularity&apiKey=fa44b9ecee9e4d73910268770d44fbed';

  constructor(private httpClient: HttpClient) {}

  loadPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.readOnly);
  }

  loadFilteredPosts(): Observable<Post[]> {
    return this.loadPosts().pipe(
      map((posts) => posts.filter((post) => post.img))
    );
  }

  getPost(id): Post {
    return postList.find((post) => post.id === id);
  }

  addLike(post: Post) {
    post.likes++;
    this.httpClient.put(post.id, post);
  }

  removeLike(post: Post) {
    post.likes--;
    this.httpClient.put(post.id, post);
  }
}
