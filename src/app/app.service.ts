import { EventEmitter, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  emitirItem = new EventEmitter<string>()
  lista: string[] = []

  getLista() {
    return this.lista
  }

  addLista(item: string) {
    this.lista.push(item)
    this.emitirItem.emit(item)
  }
}
