import { Component, OnDestroy, OnInit } from '@angular/core'
import { AlunosService } from '../alunos.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Aluno } from '../aluno'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit, OnDestroy {

  aluno: Aluno
  subscriptionAluno: Subscription
  id: string

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
      this.router.navigate(['**'])
    }
  }

  ngOnDestroy(): void {
    this.subscriptionAluno.unsubscribe()
  }
}
