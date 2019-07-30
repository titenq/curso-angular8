import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { NgcontentPageComponent } from './ngcontent-page.component'

describe('NgcontentPageComponent', () => {
  let component: NgcontentPageComponent;
  let fixture: ComponentFixture<NgcontentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcontentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcontentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
