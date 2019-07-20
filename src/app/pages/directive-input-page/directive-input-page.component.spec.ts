import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveInputPageComponent } from './directive-input-page.component';

describe('DirectiveInputPageComponent', () => {
  let component: DirectiveInputPageComponent;
  let fixture: ComponentFixture<DirectiveInputPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveInputPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveInputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
