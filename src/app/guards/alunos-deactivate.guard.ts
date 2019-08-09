import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router'

import { Observable } from 'rxjs'
import { AlunoFormComponent } from '../pages/alunos/aluno-form/aluno-form.component'
import { FormDeactivate } from './form-deactivate'

@Injectable({
  providedIn: 'root'
})
export class AlunosDeactivateGuard implements CanDeactivate<FormDeactivate> {
  canDeactivate(
    component: FormDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return component.canDeactivate ? component.canDeactivate() : true
  }

}
