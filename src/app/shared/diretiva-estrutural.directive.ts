import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[appDiretivaEstrutural]'
})
export class DiretivaEstruturalDirective {
  hasView: boolean = false

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input() set appDiretivaEstrutural(condition: boolean) {
    if (condition && !this.hasView) {
      this.hasView = true
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else if (!condition && this.hasView) {
      this.hasView = false
      this.viewContainerRef.clear()
    }
  }

}
