import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysRepComponent } from './sys-rep.component';

describe('SysRepComponent', () => {
  let component: SysRepComponent;
  let fixture: ComponentFixture<SysRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysRepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
