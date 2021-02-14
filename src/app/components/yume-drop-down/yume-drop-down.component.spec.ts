import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YumeDropDownComponent } from './yume-drop-down.component';

describe('YumeDropDownComponent', () => {
  let component: YumeDropDownComponent;
  let fixture: ComponentFixture<YumeDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YumeDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YumeDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
