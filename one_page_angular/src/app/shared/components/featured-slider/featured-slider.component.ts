import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-slider',
  templateUrl: './featured-slider.component.html',
  styleUrls: ['./featured-slider.component.scss']
})
export class FeaturedSliderComponent {

  @Input() data!: any;

}
