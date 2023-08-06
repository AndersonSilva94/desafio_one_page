import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeaturedSliderComponent } from './components/featured-slider/featured-slider.component';


@NgModule({
  declarations: [
    FeaturedSliderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class SharedModule { }
