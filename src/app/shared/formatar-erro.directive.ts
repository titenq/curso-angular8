import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFormatarErro]'
})
export class FormatarErroDirective {
  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
    // Utilize o console.log no elementRef para verificar os atributos e propriedades que podem ser modificados.
    // console.log(this.elementRef)
    // Não modificar os atributos diretamente do nativeElement como no exemplo abaixo.
    // this.elementRef.nativeElement.style.backgroundColor = 'red'
    // Modifique os atributos no Renderer2, como no exemplo abaixo.
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red')
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', '30vw')
    this.renderer.setStyle(this.elementRef.nativeElement, 'padding', '5px')
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex')
    this.renderer.setStyle(this.elementRef.nativeElement, 'justify-content', 'center')
    this.renderer.setStyle(this.elementRef.nativeElement, 'align-itens', 'center')
    this.renderer.setStyle(this.elementRef.nativeElement, 'align-content', 'center')
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'yellow')
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-family', 'sans-serif')
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '1.5em')
    this.renderer.setStyle(this.elementRef.nativeElement, 'text-align', 'center')
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', '10px')
    this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', '0px 0px 8px black')
  }

}
