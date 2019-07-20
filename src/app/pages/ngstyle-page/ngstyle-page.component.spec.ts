import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstylePageComponent } from './ngstyle-page.component';

describe('NgstylePageComponent', () => {
  let component: NgstylePageComponent;
  let fixture: ComponentFixture<NgstylePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgstylePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgstylePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
