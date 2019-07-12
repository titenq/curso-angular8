import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SetorComponent } from './setor/setor.component';
import { TabelaComponent } from './tabela/tabela.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ViewChildComponent } from './view-child/view-child.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FuncionariosModule
      ],
      declarations: [
        AppComponent,
        SetorComponent,
        TabelaComponent,
        OutputPropertyComponent,
        LifecycleComponent,
        ViewChildComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'curso-angular8'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('curso-angular8');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to curso-angular8!');
  });
});
