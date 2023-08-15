import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardSectionComponent } from './post-card-section.component';

describe('PostCardSectionComponent', () => {
  let component: PostCardSectionComponent;
  let fixture: ComponentFixture<PostCardSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostCardSectionComponent]
    });
    fixture = TestBed.createComponent(PostCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
