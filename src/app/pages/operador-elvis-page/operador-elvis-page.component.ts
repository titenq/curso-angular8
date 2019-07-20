import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis-page',
  templateUrl: './operador-elvis-page.component.html',
  styleUrls: ['./operador-elvis-page.component.css']
})
export class OperadorElvisPageComponent implements OnInit {

  constructor() { }

  cliente: any = {
    nome: 'João da Silva',
    endereco: null
  }

  ngOnInit() {
  }

}
