import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSignalItemComponent } from './input-signal-item.component';

describe('InputSignalItemComponent', () => {
  let component: InputSignalItemComponent;
  let fixture: ComponentFixture<InputSignalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSignalItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSignalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
