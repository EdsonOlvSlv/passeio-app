// src/app/shared/models.ts
export interface Product {
  id?: number;
  nome: string;
  taxaJurosAnual: number; // %
  prazoMaximoMeses: number;
}
export interface SimulationRequest {
  produtoId: number;
  valor: number;
  meses: number;
}
export interface Installment {
  mes: number;
  juros: number;
  amortizacao: number;
  saldo: number;
  parcela: number;
}
export interface SimulationResult {
  produto: Product;
  taxaEfetivaMensal: number; // decimal
  parcelaMensal: number;
  valorTotalComJuros: number;
  memoriaCalculo: Installment[];
}
