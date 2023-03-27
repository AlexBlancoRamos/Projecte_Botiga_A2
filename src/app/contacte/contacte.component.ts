import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.component.html',
  styleUrls: ['./contacte.component.css']
})
export class ContacteComponent {
    NomUser : any;
  Recomanacio: any;
  enviaFormulari(){
    console.log(this.NomUser)
    console.log(this.Recomanacio)
    this.http.post<any>('http://172.16.5.1:3080/contacte',{
      nom: this.NomUser,
      recomanacio: this.Recomanacio

  }).subscribe();
  alert("Enviat!");
  this.NomUser = '';
  this.Recomanacio = '';
}
constructor(private http:HttpClient) {
}

}
