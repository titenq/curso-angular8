import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AlunosComponent } from './alunos/alunos.component'
import { AlunoComponent } from './aluno/aluno.component'
import { AlunoFormComponent } from './aluno-form/aluno-form.component'

const alunosRoutes: Routes = [
  {path: '', component: AlunosComponent},
  {path: 'add', component: AlunoFormComponent},
  {path: ':id', component: AlunoComponent},
  {path: ':id/edit', component: AlunoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
