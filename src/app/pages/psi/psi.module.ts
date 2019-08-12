import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { PsiRoutingModule } from './psi-routing.module';
import { PsiComponent } from './psi/psi.component';
import { PsiFormComponent } from './psi-form/psi-form.component';
import { PsiService } from './psi.service'
import { PacienteResolverService } from './paciente-resolver.service'

@NgModule({
  declarations: [
    PsiComponent,
    PsiFormComponent
  ],
  imports: [
    CommonModule,
    PsiRoutingModule,
    FormsModule
  ],
  providers: [
    PsiService,
    PacienteResolverService
  ]
})
export class PsiModule { }
