import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysRepPopupComponent } from './sys-rep-popup.component';

describe('SysRepPopupComponent', () => {
  let component: SysRepPopupComponent;
  let fixture: ComponentFixture<SysRepPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysRepPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysRepPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
