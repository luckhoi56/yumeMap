import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YumeRadioButtonComponent } from './yume-radio-button.component';

describe('YumeRadioButtonComponent', () => {
  let component: YumeRadioButtonComponent;
  let fixture: ComponentFixture<YumeRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YumeRadioButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YumeRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
