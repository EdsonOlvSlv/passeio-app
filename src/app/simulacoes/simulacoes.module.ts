// src/app/simulacoes/simulacoes.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SimulacoesRoutingModule } from './simulacoes-routing.module';
import { SimulacaoPage } from './simulacao.page';

@NgModule({
  declarations: [SimulacaoPage],
  imports: [CommonModule, FormsModule, SimulacoesRoutingModule],
})
export class SimulacoesModule {}
