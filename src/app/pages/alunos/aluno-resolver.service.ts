import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'

import { AlunosModule } from './alunos.module'
import { Aluno } from './aluno'
import { Observable } from 'rxjs'
import { AlunosService } from './alunos.service'

@Injectable()
export class AlunoResolverService implements Resolve<Aluno> {

  constructor(private alunosService: AlunosService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Aluno> | Promise<Aluno> | Aluno {

    let id = route.paramMap.get('id')

    return this.alunosService.getAluno(Number(id))
  }
}
