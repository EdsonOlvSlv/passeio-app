// src/app/shared/finance.util.ts
import { Installment, Product, SimulationResult } from './models';

export function annualToMonthlyEffective(annualPercent: number): number {
  const ia = annualPercent / 100;
  return Math.pow(1 + ia, 1 / 12) - 1;
}
export function pmt(i: number, n: number, pv: number): number {
  if (i === 0) return pv / n;
  return (pv * i) / (1 - Math.pow(1 + i, -n));
}
export function buildAmortization(pv: number, i: number, n: number) {
  const parcela = pmt(i, n, pv);
  let saldo = pv,
    total = 0;
  const schedule: Installment[] = [];
  for (let mes = 1; mes <= n; mes++) {
    const juros = saldo * i;
    const amortizacao = parcela - juros;
    saldo = Math.max(0, saldo - amortizacao);
    total += parcela;
    schedule.push({ mes, juros, amortizacao, saldo, parcela });
  }
  return { schedule, parcela, total };
}
export function localSimulation(
  produto: Product,
  valor: number,
  meses: number
): SimulationResult {
  const i = annualToMonthlyEffective(produto.taxaJurosAnual);
  const { schedule, parcela, total } = buildAmortization(valor, i, meses);
  return {
    produto,
    taxaEfetivaMensal: i,
    parcelaMensal: parcela,
    valorTotalComJuros: total,
    memoriaCalculo: schedule,
  };
}
