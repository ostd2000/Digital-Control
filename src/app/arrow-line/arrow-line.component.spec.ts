import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowLineComponent } from './arrow-line.component';

describe('ArrowLineComponent', () => {
  let component: ArrowLineComponent;
  let fixture: ComponentFixture<ArrowLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
