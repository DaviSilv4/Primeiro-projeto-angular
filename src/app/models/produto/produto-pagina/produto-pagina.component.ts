import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Produto } from '../produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-pagina',
  templateUrl: './produto-pagina.component.html',
  styleUrls: ['./produto-pagina.component.scss']
})
export class ProdutoPaginaComponent implements OnInit {

  id: Observable<Produto>;
  inscricao: Subscription;
  produto: any;

  constructor(private route: ActivatedRoute, private produtoService: ProdutoService, private router: Router) {
    this.id = route.snapshot.params['id'];

    this.inscricao = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.produto = this.produtoService.getProduto(this.id);
    console.log(this.produto);

    if(this.produto == null){
      this.router.navigate(['/pagina-nao-encontrada']);
    }

  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
