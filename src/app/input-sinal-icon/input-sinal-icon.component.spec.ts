import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSinalIconComponent } from './input-sinal-icon.component';

describe('InputSinalIconComponent', () => {
  let component: InputSinalIconComponent;
  let fixture: ComponentFixture<InputSinalIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSinalIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSinalIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
