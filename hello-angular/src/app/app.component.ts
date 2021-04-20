import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = "Vinicius";
  idade = 20;
  number:number;
  esconderCaixa = true;

  escolher(){
    this.number = Math.floor(Math.random() * 100) + 1;
  }

  alterarNome(nome) {
    this.nome = nome.target.value;
    console.log(nome.target.value);
  }

  lancarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }

  adicionar(nomeInput) {
    console.log("Adicionando...");
    console.log(nomeInput.value);
    this.nome = nomeInput.value;
    if (nomeInput.value.length >= 3)
      this.esconderCaixa = false;
    else
      this.esconderCaixa = true;
  }

}