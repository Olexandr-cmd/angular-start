import {Component, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../models/model';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;
  @Output()
  upPost = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }


  getPost(post: Post): void {
    this.upPost.emit(post);
  }
}
