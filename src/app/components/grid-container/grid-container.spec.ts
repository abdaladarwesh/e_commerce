import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridContainer } from './grid-container';

describe('GridContainer', () => {
  let component: GridContainer;
  let fixture: ComponentFixture<GridContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
