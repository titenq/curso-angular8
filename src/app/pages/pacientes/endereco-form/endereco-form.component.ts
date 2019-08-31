import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute} from '@angular/router'
import {HttpClient} from '@angular/common/http';

import {PacientesService} from '../pacientes.service'
import {Visita} from '../endereco/visita';
import { Observable, Subscription } from 'rxjs';
import {map} from 'rxjs/operators'
import {EstadoBr} from '../endereco/estado-br';
import {ConsultaCepService} from '../../../shared/services/consulta-cep.service';

@Component({
  selector: 'app-endereco-form',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.css']
})
export class EnderecoFormComponent implements OnInit, OnDestroy {

  visita: Visita
  visitas: Visita[]
  subscriptionVisita: Subscription
  // estadosBr: EstadoBr[]
  estadosBr: Observable<EstadoBr[]>

  formVisita = this.formBuilder.group({
    id: [null, Validators.required],
    nome: ['', Validators.required],
    rg: ['', Validators.required],
    endereco: this.formBuilder.group({
      id: [null, Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      cep: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required]
    }),
    paciente: [this.pacientesService.getPaciente(this.activatedRoute.snapshot.params.id)]
  })

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private pacientesService: PacientesService,
              private consultaCepService: ConsultaCepService) { }

  ngOnInit() {
    this.subscriptionVisita = this.activatedRoute.data.subscribe(
      (data: { visita: Visita }) => {
        this.visita = data.visita
      })

    if (this.visita === undefined) {
      this.visita = new Visita(null, '', '', null, null)
    }

    this.visitas = this.pacientesService.getVisitas()

    /*this.pacientesService.getEstadosBr()
      .subscribe((dados: any) => {
        this.estadosBr = dados
      })*/

    this.estadosBr = this.pacientesService.getEstadosBr()
  }

  onSubmitVisita() {
    if (this.formVisita.valid) {
      this.pacientesService.addVisita(this.formVisita.value)
    } else {
      this.validarForm(this.formVisita)
    }
  }

  ngOnDestroy(): void {
    this.subscriptionVisita.unsubscribe()
  }

  consultarCep() {
    let cep = this.formVisita.get('endereco.cep').value

    if (cep != null && cep !== '') {
      this.consultaCepService.consultarCep(cep)
        .subscribe(res => this.popularFormVisita(res))
    }
  }

  resetarFormVisita() {
    this.formVisita.patchValue({
      endereco: {
        logradouro: null,
        numero: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    })
  }

  popularFormVisita(dados) {
    this.formVisita.patchValue({
      endereco: {
        logradouro: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }

  validarForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      let control = formGroup.get(campo)
      control.markAsDirty()
      if (control instanceof FormGroup) {
        this.validarForm(control)
      }
    })
  }
}
