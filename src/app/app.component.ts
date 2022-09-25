import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
   <!--  <app-diretivas-atributos>
      <h1>Aulas de diretiva de atributo</h1>
      <hr>
    </app-diretivas-atributos>
    <router-outlet></router-outlet> -->
   <!--
    <app-diretivas-atributos>
    </app-diretivas-atributos> -->
    <app-new-component></app-new-component>
  `
})

export class AppComponent implements OnInit {

  public destruir: boolean = true;

  constructor() {}

  ngOnInit(): void { }

  public destruirComponent(){
    this.destruir = false;
  }


}
