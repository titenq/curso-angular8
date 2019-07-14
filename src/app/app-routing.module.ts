import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewChildComponent } from './view-child/view-child.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DataBindingPageComponent } from './pages/data-binding-page/data-binding-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { NgclassPageComponent } from './pages/ngclass-page/ngclass-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'data-binding', component: DataBindingPageComponent},
  {path: 'service', component: ServicePageComponent},
  {path: 'ngclass', component: NgclassPageComponent},
  {path: 'view-child', component: ViewChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
