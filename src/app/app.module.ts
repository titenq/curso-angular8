import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { SetorComponent } from './setor/setor.component';
import { TabelaComponent } from './tabela/tabela.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ViewChildComponent } from './view-child/view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    SetorComponent,
    TabelaComponent,
    OutputPropertyComponent,
    LifecycleComponent,
    ViewChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FuncionariosModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
