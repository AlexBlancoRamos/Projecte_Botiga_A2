import { Component,OnInit, } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

interface Window {
  ethereum: any;
}

export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css'],

})
export class RegistreComponent implements OnInit{

  public formModel: FormModel = {};
  texto:any;
  text:any;
  accio:any;
  NomUser:string='';
  nom: string='';
  email: string='';
  contra: string='';
  email_login: string='';
  contra_login: string='';
  captchaClick = false;
  captchaClick2 = false;

  abrirMetaMask() {
    //@ts-ignore
    if (typeof window.ethereum !== 'undefined') {
      //@ts-ignore
      const metaMask = window.ethereum;
      metaMask
        .send('eth_requestAccounts')
        .then((accounts: string[]) => {
          const cuenta = accounts[0]; // Obtén la primera cuenta del usuario
          console.log('Sesión iniciada en MetaMask. Cuenta:', cuenta);
          // Aquí puedes realizar acciones adicionales con la cuenta del usuario
        })
        .catch((error: any) => {
          console.log('Error al iniciar sesión en MetaMask:', error);
        });
    } else {
      console.log('La extensión MetaMask no está instalada');
    }
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }

  Captcha(){
    this.captchaClick = true;
  }


  enviaregistro(){
    this.http.post<any>("http://localhost:3080/registre" , {nom: this.nom, email: this.email, contra: this.contra}).subscribe();
    this.registres()
  }

  enviarlogin(){
    var rol = '';
    var resultat: Object =false;
    let req = new HttpParams().set('email',this.email_login);
    let req2 = new HttpParams().set('contra',this.contra_login);
    this.http.get("http://localhost:3080/inicisessio", {params: req}).subscribe((client)=>{
      resultat=client;
      console.log(resultat);
      if(resultat==true){
        this.http.get("http://localhost:3080/contrasenya", {params: req2}).subscribe((client)=> {
          resultat = client;
          console.log(resultat);
          if(resultat == true){
            let nom1;
            // @ts-ignore
            nom1 = document.getElementById("nominici").value;
            let comprobar_nom = localStorage.getItem("nombre")
            let correcte = localStorage.setItem("nombre",nom1)
            this.Login()


            alert("Inicio correcto")
            this.abrirMetaMask();
            window.location.reload();
          }
          else{
            alert("Fallo de contraseña")}
        })
      }else{
        alert("Fallo de email")}
    })
  }
  registres(){

    this.http.post<any>('http://localhost:3080/registres',{
      text:   `S'ha registrat amb l'usuari: ${this.nom}  i correu: ${this.email}`

    }).subscribe();
    alert("Enviat!");
    this.nom = '';
    this.email = '';

  }

  Login(){

    this.http.post<any>('http://localhost:3080/login',{
      texto:   `Ha iniciat sessio amb el correu: ${this.email_login}  i contrasenya: ${this.contra_login}`

    }).subscribe();
    this.email_login = '';
    this.contra_login = '';

  }

}
