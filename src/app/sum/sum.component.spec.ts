import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumComponent } from './sum.component';

describe('SumComponent', () => {
  let component: SumComponent;
  let fixture: ComponentFixture<SumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
