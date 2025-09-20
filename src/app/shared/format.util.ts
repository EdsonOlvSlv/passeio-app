// src/app/shared/format.util.ts
export const toBRL = (n: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    n
  );
export const pct = (n: number, digits = 2) => `${(n * 100).toFixed(digits)}%`;
