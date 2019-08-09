import { EventEmitter, Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { User } from './pages/login/user'
import { HeaderComponent } from './components/header/header.component'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userAuth: boolean = false
  userAuthEmitter = new EventEmitter<boolean>()
  redirectUrl: string

  constructor(private router: Router) { }

  logar(user: User) {
    if (user.email === 'teste@email.com' && user.password === 'teste123') {
      this.userAuth = true
      this.userAuthEmitter.emit(true)
      this.router.navigate([this.redirectUrl])

    } else {

      this.userAuth = false
      this.userAuthEmitter.emit(false)
      this.router.navigate(['/login'])
    }
  }

  isAuth() {
    return this.userAuth
  }
}
