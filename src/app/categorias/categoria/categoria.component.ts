import { Component } from '@angular/core';
/* representa os dados do formulário, control campos */
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss',
})
export class CategoriaComponent {
  camposForm: FormGroup;

  constructor(private service: CategoriaService) {
    this.camposForm = new FormGroup({
      /* dois parametros, valor inicial e as obrigações */
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
    });
  }

  salvar() {
    this.camposForm.markAllAsTouched();

    if (this.camposForm.valid) {
      this.service.salvar(this.camposForm.value).subscribe({
        next: (categoria) => {
          console.log('Salvo com sucesso!', categoria);
        },
        error: (err) => {
          console.error('Erro ao salvar', err);
        },
      });
    }
  }

  isCampoInvalido(nomeCampo: string): boolean {
    const campo = this.camposForm.get(nomeCampo);
    return (
      (campo?.invalid && campo?.touched && campo?.errors?.['required']) || false
    );
  }
}
