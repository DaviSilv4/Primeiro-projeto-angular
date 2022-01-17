import { Produto } from './../models/produto/produto';
import { Injectable } from '@angular/core';
import { catchError, delay, observable } from 'rxjs';
import { Observable, of } from 'rxjs';
import ProdutoApi from '../../assets/produtos.json';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

  constructor() { }

  getProduto(id: Observable<Produto>){
    return of(ProdutoApi).pipe(
      delay(1000),
      catchError(error => {
        console.log('Erro ao carregar')
        return of([])
      })
    )
  }
}
