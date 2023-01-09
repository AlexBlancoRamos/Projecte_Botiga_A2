import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit{

  constructor() {
  }

  ngOnInit(){
    let boto_registro = document.getElementById("enviaregistro")
    //@ts-ignore
    boto_registro.onclick = function registre(){
      let nom;
      let con;
      //@ts-ignore
      nom = document.getElementById("nomregistro").value;
      //@ts-ignore
      con = document.getElementById("conregistro").value;

      localStorage.setItem("nombre",nom)
      localStorage.setItem("contraseña",con)

      //@ts-ignore
      document.getElementById("nomregistro").reset

      //let formulario = document.getElementById("left-box")
      //@ts-ignore
      //left-box.reset();


      let boto_inicio = document.getElementById("enviarinici")
      //@ts-ignore
      boto_inicio.onclick = function inici(){
        let nom1;
        let contrasenya1;
        //@ts-ignore
        nom1 = document.getElementById("nominici").value;
        //@ts-ignore
        contrasenya1 = document.getElementById("coninici").value;

        let comprobar_nom = localStorage.getItem("nombre")
        let comprobar_pass = localStorage.getItem("contraseña")

        if ((nom1==comprobar_nom)&&(contrasenya1==comprobar_pass)){
          let correcte = localStorage.setItem("nombre",nom1)
          alert("Inici de sessió correcte")
          return true;
        }
        else{
          alert("Inici de sessió incorrecte")
          return false;
        }

      }

      // @ts-ignore
      document.getElementById("nomregistro").value = '';
      // @ts-ignore
      document.getElementById("emailregistro").value = '';
      // @ts-ignore
      document.getElementById("conregistro").value = '';
      // @ts-ignore
      document.getElementById("con2registro").value = '';
    }
  }
}
