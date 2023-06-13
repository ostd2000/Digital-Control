import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenSysPageComponent } from './gen-sys-page.component';

describe('GenSysPageComponent', () => {
  let component: GenSysPageComponent;
  let fixture: ComponentFixture<GenSysPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenSysPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenSysPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
