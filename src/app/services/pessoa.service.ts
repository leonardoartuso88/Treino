import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private Pessoas:Pessoa[] = [];

  constructor() { }

  public Salvar(Pessoa:Pessoa) {
  
      const Index = this.Pessoas.findIndex(x => x.Id == Pessoa.Id);
      
      if(Index != -1)
        return this.Pessoas[Index] = Pessoa;
    
    Pessoa.Id = this.Pessoas.length + 1;
    return this.Pessoas.push(Pessoa);
  }
  
  public Listar() {
    return this.Pessoas;
  }
  
  public RetornarPorId(Id:number) {
    return this.Pessoas.find(x => x.Id == Id);
  }
}
