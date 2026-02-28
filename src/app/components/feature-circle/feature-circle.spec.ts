import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCircle } from './feature-circle';

describe('FeatureCircle', () => {
  let component: FeatureCircle;
  let fixture: ComponentFixture<FeatureCircle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCircle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureCircle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
