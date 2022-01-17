import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carroseul',
  templateUrl: './carroseul.component.html',
  styleUrls: ['./carroseul.component.scss']
})
export class CarroseulComponent implements OnInit {

  constructor() { }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit(): void {
  }

}



