import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LoginRoutingModule } from './login-routing.module'
import { LoginComponent } from './login/login.component'
import { CreateAccountComponent } from './create-account/create-account.component'
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule } from '@angular/material'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    LoginComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: []
})
export class LoginModule { }
