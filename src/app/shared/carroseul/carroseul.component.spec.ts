import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroseulComponent } from './carroseul.component';

describe('CarroseulComponent', () => {
  let component: CarroseulComponent;
  let fixture: ComponentFixture<CarroseulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroseulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroseulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
