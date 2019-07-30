import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DirectivePageComponent } from './directive-page.component'

describe('DirectivePageComponent', () => {
  let component: DirectivePageComponent;
  let fixture: ComponentFixture<DirectivePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
