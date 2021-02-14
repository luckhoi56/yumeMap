import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YumeSpinComponent } from './yume-spin.component';

describe('YumeSpinComponent', () => {
  let component: YumeSpinComponent;
  let fixture: ComponentFixture<YumeSpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YumeSpinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YumeSpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
