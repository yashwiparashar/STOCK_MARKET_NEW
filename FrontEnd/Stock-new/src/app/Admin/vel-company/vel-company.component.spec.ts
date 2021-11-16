import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelCompanyComponent } from './vel-company.component';

describe('VelCompanyComponent', () => {
  let component: VelCompanyComponent;
  let fixture: ComponentFixture<VelCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VelCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
