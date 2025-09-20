// src/app/shared/api.service.ts
import { Injectable } from '@angular/core';
import { Product, SimulationRequest } from './models';

const BASE = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class ApiService {
  async getProducts(): Promise<Product[]> {
    const res = await fetch(`${BASE}/produtos`);
    if (!res.ok) throw new Error('Falha ao buscar produtos');
    return res.json();
  }
  async createProduct(p: Omit<Product, 'id'>): Promise<Product> {
    const res = await fetch(`${BASE}/produtos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(p),
    });
    if (!res.ok) throw new Error('Falha ao criar produto');
    return res.json();
  }
  // Apenas guarda histórico da simulação no json-server
  async registerSimulation(req: SimulationRequest) {
    const res = await fetch(`${BASE}/simulacoes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...req, createdAt: new Date().toISOString() }),
    });
    if (!res.ok) throw new Error('Falha ao registrar simulação');
    return res.json();
  }
}
