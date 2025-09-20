// src/app/simulacoes/simulacao.page.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Product, SimulationResult } from '../shared/models';
import { toBRL, pct } from '../shared/format.util';
import { localSimulation } from '../shared/finance.util';

@Component({
  selector: 'app-simulacao-page',
  templateUrl: './simulacao.page.html',
  styleUrls: ['./simulacao.page.scss'],
  standalone: false,
})
export class SimulacaoPage implements OnInit {
  produtos: Product[] = [];
  error: string | null = null;
  result: SimulationResult | null = null;

  form = { produtoId: null as number | null, valor: 10000, meses: 12 };

  constructor(private api: ApiService) {}
  async ngOnInit() {
    try {
      this.produtos = await this.api.getProducts();
    } catch (e: any) {
      this.error = e.message ?? 'Erro ao buscar produtos';
    }
  }

  valid() {
    return !!this.form.produtoId && this.form.valor > 0 && this.form.meses > 0;
  }
  money(n: number) {
    return toBRL(n);
  }
  percent(n: number) {
    return pct(n);
  }
  reset() {
    this.result = null;
    this.form = { produtoId: null, valor: 10000, meses: 12 };
  }

  async simular() {
    if (!this.valid()) return;
    this.error = null;
    const prod = this.produtos.find((p) => p.id === this.form.produtoId);
    if (!prod) return;

    // cálculo local (Price)
    this.result = localSimulation(prod, this.form.valor, this.form.meses);

    // registra a simulação no json-server (histórico)
    try {
      await this.api.registerSimulation({
        produtoId: prod.id!,
        valor: this.form.valor,
        meses: this.form.meses,
      });
    } catch {
      this.error = 'Calculado localmente, mas falhou ao registrar na API.';
    }
  }
}
