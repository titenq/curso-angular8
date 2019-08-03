import { Component, OnInit } from '@angular/core'

import { AlunosService } from '../alunos.service'
import { Aluno } from '../aluno'

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  private alunos: Aluno[] = this.alunosService.getAlunos()
  displayedColumns: string[] = ['id', 'nome', 'turma', 'nota', 'editar', 'deletar']
  dataSource = this.alunos

  constructor(private alunosService: AlunosService) { }

  ngOnInit() {
  }
}
