import { Component, OnDestroy, OnInit } from '@angular/core'
import { Aluno } from '../aluno'
import { Subscription } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router'
import { AlunosService } from '../alunos.service'

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy {

  aluno: Aluno
  subscriptionAluno: Subscription
  id: string
  nome: string
  turma: string
  nota: number

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private alunosService: AlunosService) { }

  ngOnInit() {

    this.subscriptionAluno = this.activatedRoute.params.subscribe((params: any) => {
      let id = params[`id`]
      this.aluno = this.alunosService.getAluno(parseInt(id, 10))
      this.id = id
    })

    if (this.aluno === undefined) {
      this.aluno = new Aluno(null, '', '', null)
    }
  }

  ngOnDestroy(): void {
    this.subscriptionAluno.unsubscribe()
  }

  editAluno() {

  }

  addAluno() {
    let id = this.alunosService.getLastId()
    this.alunosService.addAluno(new Aluno(id, this.nome, this.turma, this.nota))
  }
}
