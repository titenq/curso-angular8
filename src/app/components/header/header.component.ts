import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { AuthService } from '../../auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logado: boolean = false

  constructor(private authService: AuthService,
              private router: Router) {
    this.authService.userAuthEmitter.subscribe(
      isLogado => this.logado = isLogado
    )
  }

  ngOnInit() {
  }

  logout() {
    this.logado = false
    this.router.navigate(['/'])
  }
}
