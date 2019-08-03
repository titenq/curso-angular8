import { Component, OnDestroy, OnInit } from '@angular/core'
import { Aluno } from '../aluno'
import { Subscription } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router'
import { AlunosService } from '../alunos.service'

@Component({
  selector: 'app-aluno-delete',
  templateUrl: './aluno-delete.component.html',
  styleUrls: ['./aluno-delete.component.css']
})
export class AlunoDeleteComponent implements OnInit, OnDestroy {

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
