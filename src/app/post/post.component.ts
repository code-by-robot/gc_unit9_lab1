import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post:Post = {} as Post;
  constructor(private redditService:RedditService) { }

  ngOnInit(): void {
    this.redditService.GetApiCall().subscribe((response:Post) =>{
      this.post = response;
    })
    
  }


}
