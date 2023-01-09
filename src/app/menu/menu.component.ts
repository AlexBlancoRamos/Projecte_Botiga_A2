import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  mostrar: any;

  constructor() {
  }

  ngOnInit() {
    this.mostrar = localStorage.getItem("nombre")

    //@ts-ignore
    logout_borrar.onclick = function clear(){
      window.localStorage.clear()
      alert("Inici de sessió tancat")
    }
  }

}
