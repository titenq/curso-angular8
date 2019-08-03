import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AlunosRoutingModule } from './alunos-routing.module'
import { AlunosComponent } from './alunos/alunos.component'
import { AlunoComponent } from './aluno/aluno.component'
import { AlunoFormComponent } from './aluno-form/aluno-form.component'
import { MatTableModule } from '@angular/material'
import { AlunosService } from './alunos.service'
import { AlunoDeleteComponent } from './aluno-delete/aluno-delete.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AlunosComponent,
    AlunoComponent,
    AlunoFormComponent,
    AlunoDeleteComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    MatTableModule,
    FormsModule
  ],
  providers: [AlunosService]
})
export class AlunosModule { }
