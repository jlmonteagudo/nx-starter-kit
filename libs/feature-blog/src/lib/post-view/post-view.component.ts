import { Component, OnInit, Input } from '@angular/core';
import { Post } from '@blog/data-access-blog';

@Component({
  selector: 'blog-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  @Input() post: Post;

  constructor() {}

  ngOnInit() {}
}
