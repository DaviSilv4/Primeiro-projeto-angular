import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutoComponent } from './models/produto/produto.component';
import { ProdutoPaginaComponent } from './models/produto/produto-pagina/produto-pagina.component';
import { ProdutoNaoEncotradoComponent } from './models/produto/produto-nao-encotrado/produto-nao-encotrado.component';

const routes: Routes = [
  { path: '', component: ProdutoComponent},
  { path: 'produto/:id', component: ProdutoPaginaComponent},
  { path: 'pagina-nao-encontrada', component: ProdutoNaoEncotradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
