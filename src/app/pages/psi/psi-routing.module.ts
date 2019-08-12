import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AuthGuard } from '../../guards/auth.guard'
import { PsiComponent } from './psi/psi.component'
import { PsiFormComponent } from './psi-form/psi-form.component'
import { PacienteResolverService } from './paciente-resolver.service'

const psiRoutes: Routes = [
  {path: '', component: PsiComponent, canActivate: [AuthGuard]},
  {path: ':id', component: PsiFormComponent},
  {path: ':id/edit', component: PsiFormComponent, resolve: {paciente: PacienteResolverService}},
  {path: ':id/delete', component: PsiFormComponent},
  {path: 'add', component: PsiFormComponent}

  /*{path: '',
    component: PsiComponent,
    canActivate: [AuthGuard],
    // canActivateChild: [AlunosGuard],
    children: [
      {path: 'add', component: PsiFormComponent},
      {path: ':id', component: PsiComponent/!*, resolve: {aluno: AlunoResolverService}*!/},
      {path: ':id/edit', component: PsiFormComponent/!*, canDeactivate: [AlunosDeactivateGuard], resolve: {aluno:
       AlunoResolverService}*!/},
      /!*{path: ':id/delete', component: AlunoDeleteComponent}*!/
    ]}*/
]

@NgModule({
  imports: [RouterModule.forChild(psiRoutes)],
  exports: [RouterModule]
})
export class PsiRoutingModule { }
