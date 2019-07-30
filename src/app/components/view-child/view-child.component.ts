import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {
  @ViewChild('varViewChild', {static: true}) valorVarViewChild: ElementRef
  valorViewChild: number = 0

  constructor() { }

  ngOnInit() {
  }

  incrementa() {
    this.valorVarViewChild.nativeElement.value++
  }

  decrementa() {
    this.valorVarViewChild.nativeElement.value--
  }

}
