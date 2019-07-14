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
import { MatButtonModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { DataBindingPageComponent } from './pages/data-binding-page/data-binding-page.component';
import { NgclassPageComponent } from './pages/ngclass-page/ngclass-page.component';

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
    NgclassPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
