import { Component, OnInit } from '@angular/core'

import { AppService } from '../../app.service'

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.css']
})
export class BroadcastComponent implements OnInit {
  item: string
  lista: string[] = []

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.emitirItem.subscribe(
      itemEmitido => this.item = itemEmitido
    )
  }

}
