import { Observable } from 'rxjs'

export interface FormDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}
