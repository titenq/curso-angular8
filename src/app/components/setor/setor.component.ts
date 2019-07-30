import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.css']
})
export class SetorComponent implements OnInit {

  constructor() { }

  @Input() varFilho: string = ''

  ngOnInit() {
  }
}
