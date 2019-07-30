import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { RouterPageComponent } from './router-page.component'

describe('RouterPageComponent', () => {
  let component: RouterPageComponent;
  let fixture: ComponentFixture<RouterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
