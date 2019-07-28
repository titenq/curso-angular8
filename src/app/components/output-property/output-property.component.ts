import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  numClickCoracao: number = 0

  constructor() { }

  @Output() clicaramNoCoracao: EventEmitter<any> = new EventEmitter()

  ngOnInit() {
  }

  clickMais() {
    this.numClickCoracao++
    this.clicaramNoCoracao.emit({numClicks: this.numClickCoracao})
  }

  clickMenos() {
    this.numClickCoracao--
    this.clicaramNoCoracao.emit({numClicks: this.numClickCoracao})
  }

}
