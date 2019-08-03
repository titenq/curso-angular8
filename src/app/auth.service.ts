import { EventEmitter, Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { User } from './pages/login/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userAuth: boolean = false
  userAuthEmitter = new EventEmitter<boolean>()

  constructor(private router: Router) { }

  logar(user: User) {
    if (user.email === 'teste@email.com' && user.password === 'teste123') {
      this.userAuth = true
      this.userAuthEmitter.emit(true)
      this.router.navigate(['/'])
    } else {
      this.userAuth = false
      this.userAuthEmitter.emit(false)
      this.router.navigate(['**'])
    }
  }
}
