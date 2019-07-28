import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Subscription } from 'rxjs'
import { FuncionariosService } from '../funcionarios/funcionarios.service'

@Component({
  selector: 'app-router-com-id',
  templateUrl: './router-com-id.component.html',
  styleUrls: ['./router-com-id.component.css']
})
export class RouterComIdComponent implements OnInit, OnDestroy {

  id: string
  funcionarioComId = this.funcionariosService.getFuncionariosComId()
  funcionario: any
  inscricao: Subscription

  constructor(private activatedRoute: ActivatedRoute,
              private funcionariosService: FuncionariosService) {
  }

  ngOnInit() {
    this.inscricao = this.activatedRoute.params.subscribe((params: any) => {
      this.id = params[`id`]
    })

    this.funcionario = this.funcionariosService.getFuncionarioPorId(parseInt(this.id, 10))
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

}
