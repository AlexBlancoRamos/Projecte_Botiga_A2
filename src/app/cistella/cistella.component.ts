import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css']
})
export class CistellaComponent implements OnInit{
  mostrar:any;
  constructor() {

  }
  ngOnInit() {
    var preu_total= 0;
    const subject = document.querySelector('#subject')!;
    if (localStorage.getItem("producte1")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producte1")!);
      // @ts-ignore
      var presio=document.getElementById("Preu teclat").innerHTML;
      console.log(presio)
      var x=parseInt(presio)
      console.log(x)
      preu_total = preu_total+x
    }
    if (localStorage.getItem("producte2")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producte2")!);
      // @ts-ignore
      var presio=document.getElementById("Preu ratoli").innerHTML;
      console.log(presio)
      var x=parseInt(presio)
      console.log(x)
      preu_total = preu_total+x
    }
    if (localStorage.getItem("producte3")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producte3")!);
      // @ts-ignore
      var presio=document.getElementById("Preu cascos").innerHTML;
      console.log(presio)
      var x=parseInt(presio)
      console.log(x)
      preu_total = preu_total+x
    }
    if (localStorage.getItem("producte4")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producte4")!);
      // @ts-ignore
      var presio=document.getElementById("Preu ram").innerHTML;
      console.log(presio)
      var x=parseInt(presio)
      console.log(x)
      preu_total = preu_total+x
    }
    if (localStorage.getItem("producte5")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producte5")!);
      // @ts-ignore
      var presio=document.getElementById("Preu placa").innerHTML;
      console.log(presio)
      var x=parseInt(presio)
      console.log(x)
      preu_total = preu_total+x
    }
    if (localStorage.getItem("torre1")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("torre1")!);
      // @ts-ignore
      var presio=document.getElementById("Preu torre1").innerHTML;
      console.log(presio)
      var x=parseInt(presio)
      console.log(x)
      preu_total = preu_total+x
    }
    if (localStorage.getItem("torre2")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("torre2")!);
      // @ts-ignore
      console.log(document.getElementById("Preu torre2").innerHTML);
    }
    if (localStorage.getItem("torre3")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("torre3")!);
      // @ts-ignore
      var presio=document.getElementById("Preu torre3").innerHTML;
      console.log(presio)
      var x=parseInt(presio)
      console.log(x)
      preu_total = preu_total+x
    }
    if (localStorage.getItem("torre4")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("torre4")!);
      // @ts-ignore
      var presio=document.getElementById("Preu torre4").innerHTML;
      console.log(presio)
      var x=parseInt(presio)
      console.log(x)
      preu_total = preu_total+x
    }
    if (localStorage.getItem("torre5")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("torre5")!);
      // @ts-ignore
      var presio=document.getElementById("Preu torre5").innerHTML;
      console.log(presio)
      var x=parseInt(presio)
      console.log(x)
      preu_total = preu_total+x
    }
    if (localStorage.getItem("periferico1")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("periferico1")!);
      // @ts-ignore
      var presio=document.getElementById("Preu periferic1").innerHTML;
      console.log(presio)
      var x=parseInt(presio)
      console.log(x)
      preu_total = preu_total+x
    }
    if (localStorage.getItem("periferico2")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("periferico2")!);
      // @ts-ignore
      var presio=document.getElementById("Preu periferic2").innerHTML;
      console.log(presio)
      var x=parseInt(presio)
      console.log(x)
      preu_total = preu_total+x
    }
    if (localStorage.getItem("periferico3")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("periferico3")!);
      // @ts-ignore
      var presio=document.getElementById("Preu periferic3").innerHTML;
      console.log(presio)
      var x=parseInt(presio)
      console.log(x)
      preu_total = preu_total+x
    }
    if (localStorage.getItem("periferico4")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("periferico4")!);
      // @ts-ignore
      var presio=document.getElementById("Preu periferic4").innerHTML;
      console.log(presio)
      var x=parseInt(presio)
      console.log(x)
      preu_total = preu_total+x
    }
    if (localStorage.getItem("periferico5")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("periferico5")!);
      // @ts-ignore
      var presio=document.getElementById("Preu periferic5").innerHTML;
      console.log(presio)
      var x=parseInt(presio)
      console.log(x)
      preu_total = preu_total+x
    }
    console.log(preu_total)
    this.mostrar = preu_total
  }
  borrar(){
    window.localStorage.clear()
  }
}
