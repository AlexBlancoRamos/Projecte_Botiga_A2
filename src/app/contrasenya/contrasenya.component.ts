import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contrasenya',
  templateUrl: './contrasenya.component.html',
  styleUrls: ['./contrasenya.component.css']
})
export class ContrasenyaComponent {
  email: any;
  user:any;
constructor(private http:HttpClient) {
}

enviar(){
   this.http.post("http://localhost:3080/api/sendemail",{name:'user', email:this.email,subject:"Nova contrasenya",message:"text de prov"}).subscribe((client) => {
   console.log(client);
   })
  alert('Correu enviat')
}
}


