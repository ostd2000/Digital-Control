import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSignalComponent } from './input-signal.component';

describe('InputSignalComponent', () => {
  let component: InputSignalComponent;
  let fixture: ComponentFixture<InputSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSignalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
