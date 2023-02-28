import { Component,OnInit } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})

export class RegistreComponent implements OnInit{

  nom: string='';
  email: string='';
  contra: string='';
  email_login: string='';
  contra_login: string='';

  constructor(private http: HttpClient) {

  }

  ngOnInit(){

  }

  enviaregistro(){
    this.http.post<any>("http://172.16.5.1:3080/registre" , {nom: this.nom, email: this.email, contra: this.contra}).subscribe();
  }

  enviarlogin(){

    var resultat: Object =false;
    let req = new HttpParams().set('email',this.email_login);
    let req2 = new HttpParams().set('contra',this.contra_login);
    this.http.get("http://172.16.5.1:3080/inicisessio", {params: req}).subscribe((client)=>{
      resultat=client;
      console.log(resultat);
      if(resultat==true){
        this.http.get("http://172.16.5.1:3080/contrasenya", {params: req2}).subscribe((client)=> {
          resultat = client;
          console.log(resultat);
          if(resultat == true){
            alert("Inicio correcto")

          }
          else{
            alert("Fallo de contraseña")}
        })
      }else{
        alert("Fallo de email")}
    })
  }
}
