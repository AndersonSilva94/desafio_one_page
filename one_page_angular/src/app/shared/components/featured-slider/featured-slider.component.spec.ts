import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedSliderComponent } from './featured-slider.component';

describe('FeaturedSliderComponent', () => {
  let component: FeaturedSliderComponent;
  let fixture: ComponentFixture<FeaturedSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedSliderComponent]
    });
    fixture = TestBed.createComponent(FeaturedSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
