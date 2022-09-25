import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true;
  public height: string = '20px'
  public color: string = 'red'
  public nome: string = "";

  public list : Array<{nome: string}> = [{nome: "Matheus"}]

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if(this.valor){
        this.valor = false
      } else {
        this.valor = true
      }

      if(this.height == "20px"){
        this.height = "50px"
        this.color = "blue"
      } else { 
        this.height = "20px"
        this.color = "red"
      }
    }, 2000)
  }

  public salvar(){
    this.list.push({ nome: this.nome})
  }
}
