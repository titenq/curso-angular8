import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-ngclass-page',
  templateUrl: './ngclass-page.component.html',
  styleUrls: ['./ngclass-page.component.css']
})
export class NgclassPageComponent implements OnInit {
  curtir: boolean = false

  constructor() { }

  ngOnInit() {
  }

  curtiu() {
    this.curtir = !this.curtir
  }
}
