import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFuncComponent } from './transfer-func.component';

describe('TransferFuncComponent', () => {
  let component: TransferFuncComponent;
  let fixture: ComponentFixture<TransferFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferFuncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
