import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaspicamComponent } from './raspicam.component';

describe('RaspicamComponent', () => {
  let component: RaspicamComponent;
  let fixture: ComponentFixture<RaspicamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaspicamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaspicamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
