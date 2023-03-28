import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  texto:any;
  mostrar: any;


  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.mostrar = localStorage.getItem("nombre")

    //@ts-ignore
    logout_borrar.onclick = function clear() {

      window.localStorage.clear()
      alert("Inici de sessió tancat")
      window.location.reload();
       this.http.post<any>('http://172.16.5.1:3080/logout',{
         texto: `  L'usuari a tencat la sessio `
       }).subscribe()

    }
  }
}


