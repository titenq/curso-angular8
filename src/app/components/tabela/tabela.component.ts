import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  constructor() { }

  varPai: string = 'Valor do pai em tabela.component.ts'
  numCoracoesClicados: number = 0

  ngOnInit() {
  }

  onClicaramNoCoracao(event) {
    this.numCoracoesClicados = event.numClicks
  }

}
