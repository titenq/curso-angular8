import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewChildComponent } from './view-child/view-child.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DataBindingPageComponent } from './pages/data-binding-page/data-binding-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { NgclassPageComponent } from './pages/ngclass-page/ngclass-page.component';
import { NgstylePageComponent } from './pages/ngstyle-page/ngstyle-page.component';
import { OperadorElvisPageComponent } from './pages/operador-elvis-page/operador-elvis-page.component';
import { NgcontentPageComponent } from './pages/ngcontent-page/ngcontent-page.component';
import { DirectivePageComponent } from './pages/directive-page/directive-page.component';
import { HostListenerPageComponent } from './pages/host-listener-page/host-listener-page.component';
import { DirectiveInputPageComponent } from './pages/directive-input-page/directive-input-page.component';
import { DiretivaEstruturalPageComponent } from './pages/diretiva-estrutural-page/diretiva-estrutural-page.component';
import { BroadcastPageComponent } from './pages/broadcast-page/broadcast-page.component';
import { PipesPageComponent } from './pages/pipes-page/pipes-page.component'

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'data-binding', component: DataBindingPageComponent},
  {path: 'service', component: ServicePageComponent},
  {path: 'ngclass', component: NgclassPageComponent},
  {path: 'ngstyle', component: NgstylePageComponent},
  {path: 'ngcontent', component: NgcontentPageComponent},
  {path: 'directive', component: DirectivePageComponent},
  {path: 'operador-elvis', component: OperadorElvisPageComponent},
  {path: 'view-child', component: ViewChildComponent},
  {path: 'host-listener', component: HostListenerPageComponent},
  {path: 'directive-input', component: DirectiveInputPageComponent},
  {path: 'diretiva-estrutural', component: DiretivaEstruturalPageComponent},
  {path: 'broadcast', component: BroadcastPageComponent},
  {path: 'pipes', component: PipesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
