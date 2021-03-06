import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'

import { Observable } from 'rxjs'
import { Paciente } from '../psi/paciente'
import { PacientesService } from './pacientes.service'

@Injectable()
export class PacienteResolverService implements Resolve<Paciente> {

  constructor(private pacientesService: PacientesService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Paciente> | Promise<Paciente> | Paciente {

    let id = Number(route.paramMap.get(`id`))

    return this.pacientesService.getPaciente(id)
  }
}
