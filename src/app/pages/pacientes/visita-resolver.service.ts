import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Visita } from './endereco/visita'
import { Observable } from 'rxjs'
import { PacientesService } from './pacientes.service'

@Injectable()
export class VisitaResolverService implements Resolve<Visita> {

  constructor(private pacientesService: PacientesService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Visita> | Promise<Visita> | Visita {

    let id = Number(route.paramMap.get(`id`))

    return this.pacientesService.getVisita(id)
  }
}
