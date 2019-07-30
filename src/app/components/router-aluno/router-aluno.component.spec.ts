import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { RouterAlunoComponent } from './router-aluno.component'

describe('RouterAlunoComponent', () => {
  let component: RouterAlunoComponent;
  let fixture: ComponentFixture<RouterAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
