import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router'
import { RouterService } from '../../pages/router-page/router.service'

@Component({
  selector: 'app-router-aluno',
  templateUrl: './router-aluno.component.html',
  styleUrls: ['./router-aluno.component.css']
})
export class RouterAlunoComponent implements OnInit, OnDestroy {

  id: string
  aluno: any
  inscricao: Subscription
  page: number
  inscricaoQueryParams: Subscription

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private routerService: RouterService) {
  }

  ngOnInit() {
    this.inscricao = this.activatedRoute.params.subscribe((params: any) => {
      this.id = params[`id`]
    })

    this.aluno = this.routerService.getAlunoPorId(parseInt(this.id, 10))

    if (this.aluno === undefined) {
      this.router.navigate(['**'])
    }

    this.inscricaoQueryParams = this.activatedRoute.queryParams.subscribe((queryParams: any) => {
      this.page = queryParams[`page`]
    })
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
    this.inscricaoQueryParams.unsubscribe()
  }

  prevPage() {
    this.page--
    this.router.navigate(['router/aluno'], {queryParams: {page: this.page}})
  }

  nextPage() {
    this.page++
    this.router.navigate(['router/aluno'], {queryParams: {page: this.page}})
  }
}
