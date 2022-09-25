import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{nome: string, idade: number}> = [
    {nome: "Denner", idade: 26}, 
    {nome: "Matheus", idade: 21},
    {nome: "Thalyta", idade: 21}
  ]

  public nome:string = "Denner"


  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if(this.condition){
        this.condition = false
      } else {
        this.condition = true
      }
    }, 2000)
  }

  public onClick(){
    setInterval(() => {
      if(this.conditionClick){
        this.conditionClick = false
      } else {
        this.conditionClick = true
      }
    }, 2000)
  }

  public onClickAddList(){
    this.list.push({nome: "Nay", idade: 31})
  }

  public onClickEventList(event: number){
    this.list.splice(event, 1)
  }

}
