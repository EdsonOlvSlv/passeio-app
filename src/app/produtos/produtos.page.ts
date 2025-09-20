// src/app/produtos/produtos.page.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Product } from '../shared/models';

@Component({
  selector: 'app-produtos-page',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
  standalone: false,
})
export class ProdutosPage implements OnInit {
  produtos: Product[] = [];
  loading = false;
  error: string | null = null;

  constructor(private api: ApiService) {}

  async ngOnInit() {
    await this.load();
  }

  async load() {
    this.loading = true;
    this.error = null;
    try {
      this.produtos = await this.api.getProducts();
    } catch (e: any) {
      this.error = e.message ?? 'Erro';
    } finally {
      this.loading = false;
    }
  }

  async create(p: Omit<Product, 'id'>) {
    try {
      this.produtos = [await this.api.createProduct(p), ...this.produtos];
    } catch (e: any) {
      this.error = e.message ?? 'Erro ao criar';
    }
  }
}
