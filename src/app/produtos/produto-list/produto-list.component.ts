// src/app/produtos/produto-list/produto-list.component.ts
import { Component, Input } from '@angular/core';
import { Product } from '../../shared/models';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss'],
  standalone: false,
})
export class ProdutoListComponent {
  @Input() items: Product[] = [];
}
