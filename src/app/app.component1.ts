/*todo Criar Menus
Retirar propriedades de app.component.ts*/

/*
<h3>Property Binding</h3>
<img src="{{ imgUrl }}" alt="Interpolation">
  &nbsp;
<img [src]="imgUrl" alt="Property Binding">
<br><br><br>
  <div class="container">
  <h3>Class Binding</h3>
<p>Escolha a cor do alerta</p>

<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio" value=""
(click)="valorAlerta('')">
<label class="form-check-label" for="inlineRadio">Nenhuma Cor</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="alert-success"
(click)="valorAlerta('alert-success')">
<label class="form-check-label" for="inlineRadio1">Verde</label>
  </div>
  <div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="alert-warning"
(click)="valorAlerta('alert-warning')">
<label class="form-check-label" for="inlineRadio2">Amarelo</label>
  </div>
  <div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="alert-danger"
(click)="valorAlerta('alert-danger')">
<label class="form-check-label" for="inlineRadio3">Vermelho</label>
</div>
<br><br>
  <div class="alert" role="alert"
  [class.alert-success] ="classeAlerta == 'alert-success'">
  Alerta Verde
</div>
<div class="alert alert-warning" role="alert"
  [class.alert-warning] ="classeAlerta == 'alert-warning'">
  Alerta Amarelo
</div>
<div class="alert alert-danger" role="alert"
  [class.alert-danger] ="classeAlerta == 'alert-danger'">
  Alerta Vermelho
</div>
</div>
<br><br><br>
  <div class="container">
  <h3>Class Binding</h3>
<p>Escolha a cor do alerta</p>

<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="styleRadio" value=""
(click)="valorEstilo('')">
<label class="form-check-label" for="styleRadio">Nenhuma Cor</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="styleRadioOptions" id="styleRadio1" value="alert-success"
(click)="valorEstilo('alert-success')">
<label class="form-check-label" for="styleRadio1">Verde</label>
  </div>
  <div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="styleRadioOptions" id="styleRadio2" value="alert-warning"
(click)="valorEstilo('alert-warning')">
<label class="form-check-label" for="styleRadio2">Amarelo</label>
  </div>
  <div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="styleRadioOptions" id="styleRadio3" value="alert-danger"
(click)="valorEstilo('alert-danger')">
<label class="form-check-label" for="styleRadio3">Vermelho</label>
</div>
<br><br>
  <div class="alert" role="alert"
  [class.alert-success] ="estiloAlerta == 'alert-success'"
  [style.display]="estiloAlerta == 'alert-success' ? 'block' : 'none'">
  Alerta Verde
</div>
<div class="alert alert-warning" role="alert"
  [class.alert-warning] ="estiloAlerta == 'alert-warning'"
  [style.display]="estiloAlerta == 'alert-warning' ? 'block' : 'none'">
  Alerta Amarelo
</div>
<div class="alert alert-danger" role="alert"
  [class.alert-danger] ="estiloAlerta == 'alert-danger'"
  [style.display]="estiloAlerta == 'alert-danger' ? 'block' : 'none'">
  Alerta Vermelho
</div>
<br><br>

  <app-funcionarios></app-funcionarios>

<br>
<form>
  <div class="form-row">
<div class="col">
<input type="text" class="form-control" placeholder="Digite aqui o nome do funcionário." (keyup)=mostrarTextoEnquantoDigita($event)>
  </div>
  <div class="col">
<input class="form-control" type="text" placeholder="O texto digitado aparecerá aqui!" readonly [value]="textoDigitado">
</div>
</div>
</form>
<br><br><br>

  <div class="form-row">
<div class="col">
<input [(ngModel)]="funcModel" class="form-control" placeholder="Digite aqui o nome do funcionário.">
  </div>
  <div class="col">
<input class="form-control" placeholder="O funcionário aparecerá aqui!" readonly [value]="funcModel">
  </div>
  <div class="col">
<button type="button" class="btn btn-primary"
(click)="gravarFuncModel()" >Gravar</button>
  </div>
  </div>
  <br><br><br>
    <p>Lista de Funcionários do ngModel</p>
<ul>
<li *ngFor="let funcModel of funcsModel">
  {{ funcModel }}
</li>
</ul>
<br><br><br>

  <app-tabela></app-tabela>

<app-lifecycle></app-lifecycle>

</div>*/
