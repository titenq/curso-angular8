import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingPageComponent } from './data-binding-page.component';

describe('DataBindingComponent', () => {
  let component: DataBindingPageComponent;
  let fixture: ComponentFixture<DataBindingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
