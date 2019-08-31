import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {map} from 'rxjs/operators';
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private httpClient: HttpClient) { }

  consultarCep(cep: string) {
    cep = cep.replace(/\D/g, '')

    if (cep != '') {
      const validarCep = /^[0-9]{8}$/

      if (validarCep.test(cep)) {
        return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`)
          .pipe(map(res => res))
      }
    }

    return of({})
  }
}
