import { Component, OnInit } from '@angular/core'

import { AppService } from '../../app.service'

@Component({
  selector: 'app-broadcast-page',
  templateUrl: './broadcast-page.component.html',
  styleUrls: ['./broadcast-page.component.css']
})
export class BroadcastPageComponent implements OnInit {
  lista: string[] = []
  valorItem: string = ''
  item: string = ''

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.valorItem = ''
    this.lista = this.appService.getLista()
  }

  addItens(item: string) {
    this.appService.addLista(item)
    this.valorItem = ''
  }

}
