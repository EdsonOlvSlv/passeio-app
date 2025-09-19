import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* formulario reativo fica observando as mudanças, tem validação */
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';

@NgModule({
  declarations: [CategoriaComponent],
  imports: [CommonModule, CategoriasRoutingModule, ReactiveFormsModule],
})
export class CategoriasModule {}
