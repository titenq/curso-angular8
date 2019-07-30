import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { NgclassPageComponent } from './ngclass-page.component'

describe('NgclassPageComponent', () => {
  let component: NgclassPageComponent;
  let fixture: ComponentFixture<NgclassPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgclassPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgclassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
