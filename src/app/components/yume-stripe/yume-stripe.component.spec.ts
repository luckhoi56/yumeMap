import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YumeStripeComponent } from './yume-stripe.component';

describe('YumeStripeComponent', () => {
  let component: YumeStripeComponent;
  let fixture: ComponentFixture<YumeStripeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YumeStripeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YumeStripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
