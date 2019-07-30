import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HostListenerPageComponent } from './host-listener-page.component'

describe('HostListenerPageComponent', () => {
  let component: HostListenerPageComponent;
  let fixture: ComponentFixture<HostListenerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostListenerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostListenerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
