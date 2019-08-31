import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

import {PacientesRoutingModule} from './pacientes-routing.module'
import {PacientesComponent} from './pacientes/pacientes.component'
import {PacienteFormComponent} from './paciente-form/paciente-form.component'
import {PacienteResolverService} from './paciente-resolver.service'
import {PacientesService} from './pacientes.service';
import {EnderecoComponent} from './endereco/endereco.component';
import {EnderecoFormComponent} from './endereco-form/endereco-form.component'
import {VisitaResolverService} from './visita-resolver.service'
import {EnderecoResolverService} from './endereco-resolver.service'

@NgModule({
  declarations: [
    PacientesComponent,
    PacienteFormComponent,
    EnderecoComponent,
    EnderecoFormComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PacientesService,
    PacienteResolverService,
    VisitaResolverService,
    EnderecoResolverService
  ]
})
export class PacientesModule { }
