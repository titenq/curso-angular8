import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core'

@Directive({
  selector: '[appModoNoturno]'
})
export class ModoNoturnoDirective implements OnInit {
  @Input() corFundoPadrao: string = 'white'
  @Input() corFontPadrao: string = 'black'
  @Input() corFundoNoturno: string = 'black'
  @Input() corFontNoturno: string = 'white'

  constructor() { }

  @HostBinding('style.backgroundColor') backgroundColor: string
  @HostBinding('style.color') color: string

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.corFundoNoturno
    this.color = this.corFontNoturno
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.corFundoPadrao
    this.color = this.corFontPadrao
  }

  ngOnInit(): void {
    this.backgroundColor = this.corFundoPadrao
    this.color = this.corFontPadrao
  }

}
