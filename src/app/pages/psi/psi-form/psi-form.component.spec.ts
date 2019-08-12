import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsiFormComponent } from './psi-form.component';

describe('PsiFormComponent', () => {
  let component: PsiFormComponent;
  let fixture: ComponentFixture<PsiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
