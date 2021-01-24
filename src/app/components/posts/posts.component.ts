import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {Post} from '../../models/model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  chosenOne: Post;

  posts: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(value => this.posts = value);
  }

  getUpPost(post: Post): void {
    this.chosenOne = post;
  }

}
