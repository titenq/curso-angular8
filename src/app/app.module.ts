import { BrowserModule } from '@angular/platform-browser'
import { LOCALE_ID, NgModule } from '@angular/core'
import { registerLocaleData } from '@angular/common'
import localept from '@angular/common/locales/pt'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SetorComponent } from './components/setor/setor.component'
import { TabelaComponent } from './components/tabela/tabela.component'
import { OutputPropertyComponent } from './components/output-property/output-property.component'
import { LifecycleComponent } from './components/lifecycle/lifecycle.component'
import { ViewChildComponent } from './components/view-child/view-child.component'
import { HeaderComponent } from './components/header/header.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { ServicePageComponent } from './pages/service-page/service-page.component'
import { DataBindingPageComponent } from './pages/data-binding-page/data-binding-page.component'
import { NgclassPageComponent } from './pages/ngclass-page/ngclass-page.component'
import { NgstylePageComponent } from './pages/ngstyle-page/ngstyle-page.component'
import { OperadorElvisPageComponent } from './pages/operador-elvis-page/operador-elvis-page.component'
import { NgcontentPageComponent } from './pages/ngcontent-page/ngcontent-page.component'
import { NgcontentComponent } from './components/ngcontent/ngcontent.component'
import { FormatarErroDirective } from './shared/formatar-erro.directive'
import { DirectivePageComponent } from './pages/directive-page/directive-page.component'
import { HostListenerPageComponent } from './pages/host-listener-page/host-listener-page.component'
import { MarcaTextoDirective } from './shared/marca-texto.directive'
import { DirectiveInputPageComponent } from './pages/directive-input-page/directive-input-page.component'
import { ModoNoturnoDirective } from './shared/modo-noturno.directive'
import { DiretivaEstruturalDirective } from './shared/diretiva-estrutural.directive'
import { DiretivaEstruturalPageComponent } from './pages/diretiva-estrutural-page/diretiva-estrutural-page.component'
import { BroadcastPageComponent } from './pages/broadcast-page/broadcast-page.component'
import { BroadcastComponent } from './components/broadcast/broadcast.component'
import { PipesPageComponent } from './pages/pipes-page/pipes-page.component'
import { CpfPipe } from './shared/cpf.pipe'
import { CelularPipe } from './shared/celular.pipe'
import { RouterPageComponent } from './pages/router-page/router-page.component'
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component'
import { RouterComIdComponent } from './components/router-com-id/router-com-id.component'
import { RouterAlunoComponent } from './components/router-aluno/router-aluno.component';
import { GuardComponent } from './pages/guard/guard.component';
import { CepPipe } from './shared/cep.pipe'
import { ConsultaCepService } from './shared/services/consulta-cep.service'
import { HttpClientModule } from '@angular/common/http'

registerLocaleData(localept, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    SetorComponent,
    TabelaComponent,
    OutputPropertyComponent,
    LifecycleComponent,
    ViewChildComponent,
    HeaderComponent,
    HomePageComponent,
    DataBindingPageComponent,
    ServicePageComponent,
    NgclassPageComponent,
    NgstylePageComponent,
    OperadorElvisPageComponent,
    NgcontentPageComponent,
    NgcontentComponent,
    FormatarErroDirective,
    DirectivePageComponent,
    HostListenerPageComponent,
    MarcaTextoDirective,
    DirectiveInputPageComponent,
    ModoNoturnoDirective,
    DiretivaEstruturalDirective,
    DiretivaEstruturalPageComponent,
    BroadcastPageComponent,
    BroadcastComponent,
    PipesPageComponent,
    CpfPipe,
    CelularPipe,
    RouterPageComponent,
    PageNotFoundPageComponent,
    RouterComIdComponent,
    RouterAlunoComponent,
    GuardComponent,
    CepPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatSlideToggleModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt'}],
  exports: [
    CepPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
