import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../../components/funcionarios/funcionarios.service'

@Component({
  selector: 'app-router-page',
  templateUrl: './router-page.component.html',
  styleUrls: ['./router-page.component.css']
})
export class RouterPageComponent implements OnInit {
  funcionarios = this.funcionariosService.getFuncionariosComId()

  constructor(private funcionariosService: FuncionariosService) { }

  ngOnInit() {
  }

}
