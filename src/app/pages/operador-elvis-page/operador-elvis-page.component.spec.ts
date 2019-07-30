import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { OperadorElvisPageComponent } from './operador-elvis-page.component'

describe('OperadorElvisPageComponent', () => {
  let component: OperadorElvisPageComponent;
  let fixture: ComponentFixture<OperadorElvisPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperadorElvisPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadorElvisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
