// src/app/produtos/produto-form/produto-form.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../shared/models';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss'],
  standalone: false,
})
export class ProdutoFormComponent {
  @Output() save = new EventEmitter<Omit<Product, 'id'>>();
  form: Omit<Product, 'id'> = {
    nome: '',
    taxaJurosAnual: 18,
    prazoMaximoMeses: 60,
  };

  valid() {
    return (
      !!this.form.nome &&
      this.form.taxaJurosAnual >= 0 &&
      this.form.prazoMaximoMeses > 0
    );
  }
  submit() {
    if (this.valid()) this.save.emit({ ...this.form });
  }
  reset() {
    this.form = { nome: '', taxaJurosAnual: 18, prazoMaximoMeses: 60 };
  }
}
