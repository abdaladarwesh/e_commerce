import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollHorizontalContainer } from './scroll-horizontal-container';

describe('ScrollHorizontalContainer', () => {
  let component: ScrollHorizontalContainer;
  let fixture: ComponentFixture<ScrollHorizontalContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollHorizontalContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollHorizontalContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
