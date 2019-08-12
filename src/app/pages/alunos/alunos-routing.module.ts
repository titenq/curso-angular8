import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AlunosComponent } from './alunos/alunos.component'
import { AlunoComponent } from './aluno/aluno.component'
import { AlunoFormComponent } from './aluno-form/aluno-form.component'
import { AlunoDeleteComponent } from './aluno-delete/aluno-delete.component'
import { AuthGuard } from '../../guards/auth.guard'
import { AlunosGuard } from '../../guards/alunos.guard'
import { AlunosDeactivateGuard } from '../../guards/alunos-deactivate.guard'
import { AlunoResolverService } from './aluno-resolver.service'

const alunosRoutes: Routes = [
  {path: '',
    component: AlunosComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AlunosGuard],
    children: [
      {path: ':id', component: AlunoComponent, resolve: {aluno: AlunoResolverService}},
      {path: ':id/edit', component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard], resolve: {aluno: AlunoResolverService}},
      {path: ':id/delete', component: AlunoDeleteComponent},
      {path: 'add', component: AlunoFormComponent}
    ]}
]

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
