import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { RouterComIdComponent } from './router-com-id.component'

describe('RouterComIdComponent', () => {
  let component: RouterComIdComponent;
  let fixture: ComponentFixture<RouterComIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterComIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterComIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
