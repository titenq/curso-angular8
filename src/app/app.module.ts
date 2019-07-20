import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetorComponent } from './setor/setor.component';
import { TabelaComponent } from './tabela/tabela.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { HeaderComponent } from './header/header.component';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { DataBindingPageComponent } from './pages/data-binding-page/data-binding-page.component';
import { NgclassPageComponent } from './pages/ngclass-page/ngclass-page.component';
import { NgstylePageComponent } from './pages/ngstyle-page/ngstyle-page.component';
import { OperadorElvisPageComponent } from './pages/operador-elvis-page/operador-elvis-page.component';
import { NgcontentPageComponent } from './pages/ngcontent-page/ngcontent-page.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { FormatarErroDirective } from './shared/formatar-erro.directive';
import { DirectivePageComponent } from './pages/directive-page/directive-page.component';
import { HostListenerPageComponent } from './pages/host-listener-page/host-listener-page.component';
import { MarcaTextoDirective } from './shared/marca-texto.directive';
import { DirectiveInputPageComponent } from './pages/directive-input-page/directive-input-page.component';
import { ModoNoturnoDirective } from './shared/modo-noturno.directive';

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
    ModoNoturnoDirective
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
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
