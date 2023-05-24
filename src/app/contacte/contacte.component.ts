import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  dob: {
    age: number;
  };
  picture: {
    large: string;
  };
  nat: string;
}

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.component.html',
  styleUrls: ['./contacte.component.css']
})

export class ContacteComponent {
  user: User | undefined;
  NomUser : any;
  Recomanacio: any;
  enviaFormulari(){
    console.log(this.NomUser)
    console.log(this.Recomanacio)
    this.http.post<any>('http://localhost:3080/contacte',{
      nom: this.NomUser,
      recomanacio: this.Recomanacio

    }).subscribe();
    alert("Enviat!");
    this.NomUser = '';
    this.Recomanacio = '';
  }
  constructor(private http:HttpClient) {
    this.http.get('https://randomuser.me/api/').subscribe((response: any) => {
      this.user = {
        name: response.results[0].name,
        email: response.results[0].email,
        dob: response.results[0].dob,
        picture: response.results[0].picture,
        nat: response.results[0].nat,
      };
    });
  }

}
