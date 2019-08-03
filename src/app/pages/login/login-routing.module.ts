import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from './login/login.component'
import { CreateAccountComponent } from './create-account/create-account.component'

const loginRoutes: Routes = [
  {path: '', component: LoginComponent,
    children: [
      {path: 'create-account', component: CreateAccountComponent}
    ]}
]

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
