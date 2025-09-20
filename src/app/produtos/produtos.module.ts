// src/app/produtos/produtos.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosPage } from './produtos.page';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';

@NgModule({
  declarations: [ProdutosPage, ProdutoFormComponent, ProdutoListComponent],
  imports: [CommonModule, FormsModule, ProdutosRoutingModule],
})
export class ProdutosModule {}
