import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatTableModule } from '@angular/material'
import { FormsModule } from '@angular/forms'

import { AlunosRoutingModule } from './alunos-routing.module'
import { AlunosComponent } from './alunos/alunos.component'
import { AlunoComponent } from './aluno/aluno.component'
import { AlunoFormComponent } from './aluno-form/aluno-form.component'
import { AlunosService } from './alunos.service'
import { AlunoDeleteComponent } from './aluno-delete/aluno-delete.component'
import { AlunoResolverService } from './aluno-resolver.service'

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
  providers: [
    AlunosService,
    AlunoResolverService
  ]
})
export class AlunosModule { }
