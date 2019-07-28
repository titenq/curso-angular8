import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewChildComponent } from './components/view-child/view-child.component';
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
import { RouterPageComponent } from './pages/router-page/router-page.component';
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component'
import { RouterComIdComponent } from './components/router-com-id/router-com-id.component'

const routes: Routes = [
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
  {path: 'pipes', component: PipesPageComponent},
  {path: 'router', component: RouterPageComponent},
  {path: 'router/:id', component: RouterComIdComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
