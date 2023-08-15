import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeaturedSliderComponent } from 'src/app/shared/components/featured-slider/featured-slider.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostCardSectionComponent } from './components/post-card-section/post-card-section.component';


@NgModule({
  declarations: [
    FeaturedSliderComponent,
    PostCardComponent,
    PostCardSectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FeaturedSliderComponent,
    PostCardComponent,
    PostCardSectionComponent
  ]
})
export class SharedModule { }
