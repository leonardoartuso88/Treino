import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa.model';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pessoa-detalhe',
  templateUrl: './pessoa-detalhe.component.html',
  styleUrls: ['./pessoa-detalhe.component.css']
})
export class PessoaDetalheComponent implements OnInit {

  public Pessoa:Pessoa = new Pessoa()

  constructor(public Service:PessoaService) { }

  ngOnInit(): void {

    const IdRota = 0;

    if(IdRota == 0)
     this.Pessoa = new Pessoa()
    else
      this.Pessoa = this.Service.RetornarPorId(IdRota);
  }

  Criar() {
    this.Pessoa = new Pessoa()
  }

  Tratar() {
    if(this.Pessoa.Nome == "") throw new Error("Necessário preencher nome")
  }

  Salvar() {
    try {
      this.Tratar() ;
      this.Service.Salvar(this.Pessoa);
      this.Criar();
      //this.Rota.navegar(TelaDeLista)
    } catch (error) {
      alert(error);
    }
  }

}
