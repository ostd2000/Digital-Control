import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalSelectComponent } from './horizontal-select.component';

describe('HorizontalSelectComponent', () => {
  let component: HorizontalSelectComponent;
  let fixture: ComponentFixture<HorizontalSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
