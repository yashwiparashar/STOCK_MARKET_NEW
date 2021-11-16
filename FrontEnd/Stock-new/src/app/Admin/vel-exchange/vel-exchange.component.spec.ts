import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelExchangeComponent } from './vel-exchange.component';

describe('VelExchangeComponent', () => {
  let component: VelExchangeComponent;
  let fixture: ComponentFixture<VelExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelExchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VelExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
