import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "Denner";
  public idade: number = 25;

  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://st2.depositphotos.com/2084857/7124/i/950/depositphotos_71245671-stock-photo-you-can-do-anything.jpg";
  public imgTitle: string = "Imagem"

  public position: {x: number, y:number} = {x:0, y:0};

  constructor() { }

  ngOnInit(): void {
  }

  public mouseMoveTest(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

  public alertaInfo(valor: MouseEvent){
    console.log(valor)
  }

}
