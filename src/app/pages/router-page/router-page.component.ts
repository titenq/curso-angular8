import { Component, OnInit } from '@angular/core'
import { FuncionariosService } from '../../components/funcionarios/funcionarios.service'
import { RouterService } from './router.service'

@Component({
  selector: 'app-router-page',
  templateUrl: './router-page.component.html',
  styleUrls: ['./router-page.component.css']
})
export class RouterPageComponent implements OnInit {
  funcionarios: any[]
  alunos: any[]

  constructor(private funcionariosService: FuncionariosService,
              private routerService: RouterService) { }

  ngOnInit() {
    this.funcionarios = this.funcionariosService.getFuncionariosComId()
    this.alunos = this.routerService.getAlunos()
  }

}
