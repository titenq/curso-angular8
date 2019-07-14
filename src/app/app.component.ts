import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  imgUrl: string = 'http://lorempixel.com/400/200'
  classeAlerta: string
  estiloAlerta: string
  textoDigitado: string = ''
  funcModel: string = ''
  funcsModel: string[] = []

  constructor() {
  }

  valorAlerta(nomeAlerta: string): void {
    this.classeAlerta = nomeAlerta
  }

  valorEstilo(nomeEstilo: string): void {
    this.estiloAlerta = nomeEstilo
  }

  mostrarTextoEnquantoDigita(event: KeyboardEvent) {
    this.textoDigitado = (event.target as HTMLInputElement).value
  }

  gravarFuncModel() {
    this.funcsModel.push(this.funcModel)
    this.funcModel = ''
  }
}
