import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplingTimeComponent } from './sampling-time.component';

describe('SamplingTimeComponent', () => {
  let component: SamplingTimeComponent;
  let fixture: ComponentFixture<SamplingTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplingTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
