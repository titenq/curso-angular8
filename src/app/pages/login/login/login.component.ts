import { Component, OnInit } from '@angular/core'

import { User } from '../user'
import { AuthService } from '../../../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User()

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logar() {
    this.authService.logar(this.user)
  }
}
