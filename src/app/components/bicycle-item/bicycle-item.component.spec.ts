import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicycleItemComponent } from './bicycle-item.component';

describe('BicycleItemComponent', () => {
  let component: BicycleItemComponent;
  let fixture: ComponentFixture<BicycleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicycleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicycleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
