import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelIpoComponent } from './vel-ipo.component';

describe('VelIpoComponent', () => {
  let component: VelIpoComponent;
  let fixture: ComponentFixture<VelIpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelIpoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VelIpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
