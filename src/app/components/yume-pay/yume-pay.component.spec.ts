import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YumePayComponent } from './yume-pay.component';

describe('YumePayComponent', () => {
  let component: YumePayComponent;
  let fixture: ComponentFixture<YumePayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YumePayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YumePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
