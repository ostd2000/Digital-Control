import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimPageComponent } from './sim-page.component';

describe('SimPageComponent', () => {
  let component: SimPageComponent;
  let fixture: ComponentFixture<SimPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
