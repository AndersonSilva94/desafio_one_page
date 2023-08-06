import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.postsService.getAllPosts()
    .subscribe(
      (res) => console.log(res),
      (err) => console.error(err)
    )
  }
}
