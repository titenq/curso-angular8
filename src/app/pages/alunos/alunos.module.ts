import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component'

@NgModule({
  declarations: [
    AlunosComponent,
    AlunoComponent,
    AlunoFormComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule
  ]
})
export class AlunosModule { }
