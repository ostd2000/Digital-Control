import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysSpecComponent } from './sys-spec.component';

describe('SysSpecComponent', () => {
  let component: SysSpecComponent;
  let fixture: ComponentFixture<SysSpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysSpecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
