import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  EventEmitter = new EventEmitter<boolean>();

  imgLogo = "https://www.bancopan.com.br/bancopan-institucional/conteudo/estrutura/assets/img/mh-icons/mh-icon--logo-desktop.svg";

  fechar: boolean = true;

  linksSites = [
    {link: 'Smartphones'},
    {link: 'Tvs'},
    {link: 'Eletronicos'},
  ]

  fecharMenu(){
    this.EventEmitter.emit(this.fechar);
    console.log(this.EventEmitter);
  }

  ngOnInit(): void {
  }

}
