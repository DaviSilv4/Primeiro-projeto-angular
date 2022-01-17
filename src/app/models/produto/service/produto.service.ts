import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, take } from 'rxjs';
import { Produto } from '../produto';
import { ProdutoServiceService } from 'src/app/rest/produto-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  API = './assets/produtos.json';

  constructor(private httpClient: HttpClient, private produtoApi: ProdutoServiceService) {
    this.getJSON().subscribe(data => {
        console.log(data);
    });
  }


  // listaProduto() {
  //   return this.httpClient.get<Produto[]>(this.API).pipe(
  //     first(),
  //     delay(1000),
  //     tap(produto => console.log(produto))
  //   );
  // }

  public getProduto(id: Observable<Produto>){
    let produto = this.produtoApi.getProduto(id).pipe();

    return produto;

  }

  public getJSON(): Observable<any> {
    return this.httpClient.get(this.API);
  }
}

