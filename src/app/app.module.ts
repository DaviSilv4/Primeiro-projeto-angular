import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './models/produto/produto.component';
import { MenuComponent } from './models/menu/menu.component';
import { CarroseulBasicoModule } from './shared/carroseul/carroseul-basico.module';
import { ProdutoPaginaComponent } from './models/produto/produto-pagina/produto-pagina.component';
import { ProdutoNaoEncotradoComponent } from './models/produto/produto-nao-encotrado/produto-nao-encotrado.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    MenuComponent,
    ProdutoPaginaComponent,
    ProdutoNaoEncotradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarroseulBasicoModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
