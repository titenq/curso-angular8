import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {AuthGuard} from '../../guards/auth.guard'
import {PacientesComponent} from './pacientes/pacientes.component'
import {PacienteFormComponent} from './paciente-form/paciente-form.component'
import {PacienteResolverService} from './paciente-resolver.service'
import {EnderecoComponent} from './endereco/endereco.component'
import {EnderecoResolverService} from './endereco-resolver.service'
import {VisitaResolverService} from './visita-resolver.service'
import {EnderecoFormComponent} from './endereco-form/endereco-form.component'

const pacientesRoutes: Routes = [
  {path: '', component: PacientesComponent, canActivate: [AuthGuard]},
  {path: 'endereco/:id/edit', component: EnderecoFormComponent,
    resolve: {endereco: EnderecoResolverService}},
  {path: ':id', component: PacienteFormComponent},
  {path: ':id/edit', component: PacienteFormComponent,
    resolve: {paciente: PacienteResolverService}},
  {path: ':id/visita', component: EnderecoFormComponent,
    resolve: {visita: VisitaResolverService}},
  {path: ':id/delete', component: PacienteFormComponent},
  {path: 'endereco', component: EnderecoComponent},
  {path: 'add', component: PacienteFormComponent}
]

@NgModule({
  imports: [RouterModule.forChild(pacientesRoutes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
