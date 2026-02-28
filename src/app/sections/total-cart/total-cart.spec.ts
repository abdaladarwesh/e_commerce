import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCart } from './total-cart';

describe('TotalCart', () => {
  let component: TotalCart;
  let fixture: ComponentFixture<TotalCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalCart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
