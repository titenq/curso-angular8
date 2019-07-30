import { Directive, HostBinding, HostListener } from '@angular/core'

@Directive({
  selector: '[appMarcaTexto]'
})
export class MarcaTextoDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') backgroundColor: string
  @HostBinding('style.fontWeight') fontWeight: string
  @HostBinding('style.padding') padding: string

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = 'yellow'
    this.fontWeight = 'bold'
    this.padding = '5px 10px'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'white'
    this.fontWeight = 'normal'
    this.padding = '0'
  }

}
