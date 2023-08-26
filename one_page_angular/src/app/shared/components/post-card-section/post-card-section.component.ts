import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card-section',
  templateUrl: './post-card-section.component.html',
  styleUrls: ['./post-card-section.component.scss']
})
export class PostCardSectionComponent implements OnInit {
  @Input() posts!: any[];

  colors: string[] = ['#FF6363', '#63ECFF', '#F363FF', '#63FF73', '#FFDD63', '#6663FF']

  constructor() {}

  ngOnInit(): void {
  }
}
