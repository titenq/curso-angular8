import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastPageComponent } from './broadcast-page.component';

describe('BroadcastPageComponent', () => {
  let component: BroadcastPageComponent;
  let fixture: ComponentFixture<BroadcastPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadcastPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
