import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioEscalaComponent } from './funcionario-escala.component';

describe('FuncionarioEscalaComponent', () => {
  let component: FuncionarioEscalaComponent;
  let fixture: ComponentFixture<FuncionarioEscalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioEscalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioEscalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
