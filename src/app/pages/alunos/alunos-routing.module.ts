import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AlunosComponent } from './alunos/alunos.component'
import { AlunoComponent } from './aluno/aluno.component'
import { AlunoFormComponent } from './aluno-form/aluno-form.component'
import { AlunoDeleteComponent } from './aluno-delete/aluno-delete.component'

const alunosRoutes: Routes = [
  {path: '', component: AlunosComponent,
    children: [
      {path: 'add', component: AlunoFormComponent},
      {path: ':id', component: AlunoComponent},
      {path: ':id/edit', component: AlunoFormComponent},
      {path: ':id/delete', component: AlunoDeleteComponent}
    ]}
]

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
