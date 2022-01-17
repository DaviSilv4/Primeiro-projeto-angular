import { Component, OnInit } from '@angular/core';
import { catchError, Observable } from 'rxjs';

import { Produto } from './produto';
import { ProdutoService } from './service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  constructor(private produto: ProdutoService) {
    this.produto$ = this.produto.getJSON();
  }

  produto$: Observable<Produto[]>;

  ngOnInit(): void {
   

  }

}
