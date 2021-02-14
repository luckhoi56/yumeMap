import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YumeCardComponent } from './yume-card.component';

describe('YumeCardComponent', () => {
  let component: YumeCardComponent;
  let fixture: ComponentFixture<YumeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YumeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YumeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
