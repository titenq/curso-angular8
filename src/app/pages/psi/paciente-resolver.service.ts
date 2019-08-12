import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'

import { Paciente } from './paciente'
import { Observable } from 'rxjs'
import { PsiService } from './psi.service'

@Injectable()
export class PacienteResolverService implements Resolve<Paciente> {

  constructor(private psiService: PsiService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot):
          Observable<Paciente> | Promise<Paciente> | Paciente {

    let id = Number(route.paramMap.get(`id`))

    return this.psiService.getPaciente(id)
  }
}
