// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './template/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'produtos' },
      {
        path: 'produtos',
        loadChildren: () =>
          import('./produtos/produtos.module').then((m) => m.ProdutosModule),
      },
      {
        path: 'simular',
        loadChildren: () =>
          import('./simulacoes/simulacoes.module').then(
            (m) => m.SimulacoesModule
          ),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
