import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();

  profissoes = ['Engenheiro', 'Professor', 'Químico', 'Zoólogo', 'Motorista'];

  salvar(pessoaForm: NgForm) {
    this.pessoa.nome = pessoaForm.value.nome;
    this.pessoa.fone = pessoaForm.value.fone;
    this.pessoa.email = pessoaForm.value.email;
    this.pessoa.profissao = pessoaForm.value.profissao;

    console.log(this.pessoa);

    //console.log(` Nome: ${nome}, Fone: ${fone}, Email: ${email}, Profissão: ${profissao} `);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
