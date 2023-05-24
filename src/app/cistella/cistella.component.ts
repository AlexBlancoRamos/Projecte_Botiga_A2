import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CarritoService} from "../carrito.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css']
})
export class CistellaComponent implements OnInit {
  mostrar: any;
  carro= this.c.getcarro();
  total: any;
  totalBTC: any;
  totalBNB:any;
  preuPoducte:number|undefined;
  simbolMoneda:any;
  monedaHistorial:any;
  preuActual:number|undefined;


  constructor(private http: HttpClient, private c: CarritoService, private datePipe: DatePipe) {

  }

  borrar(index: number){
    this.c.eliminarproductodelcarro(index);
  }

  public preutotal():number {
    let total: number = 0;
    for(let pr of this.carro){
      total+=(pr.preu)
    }
    this.total=total;
    return total;

  }

  ngOnInit() {
    this.mostrar = localStorage.getItem("nombre")
    this.preutotal();
  }

  data_compra: any;

  async comprar() {
    if(this.mostrar == null){
      this.mostrar = 'invitado';
    }
    const apiJSON = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,binancecoin,ethereum,dollars&vs_currencies=eur%27')
    const valors = await apiJSON.json();

    const data = new Date();
    this.data_compra= this.datePipe.transform(data,'yyyy-MM-dd');
    for(let i=0;i<this.carro.length;i++){
      let quant=1;


      if (this.monedaHistorial == "DOLL"){
        quant = this.carro[i].preu / valors.dollars.eur;
      }

      else if (this.monedaHistorial == "BTC"){
        quant = this.carro[i].preu / valors.bitcoin.eur;
      }

      else if (this.monedaHistorial == "BNB"){
        quant = this.carro[i].preu / valors.binancecoin.eur;
      }

      else {
        quant = this.carro[i].preu;
      }

      let query = `INSERT INTO botiga.historial_ventes (email, producte, oferta, data_compra,moneda,quantitat) VALUES (?,?,?,?,?,?)`;
      let values =[this.mostrar,this.carro[i].id,false,this.data_compra,this.monedaHistorial,quant];
      this.http.post('http://localhost:3080/insert_compra',{query,values}).subscribe();
    }

    this.http.post<any>('http://localhost:3080/comprar', {
      texto: ` L'usuari: ${this.mostrar}  a comprat.`

    }).subscribe();
    alert('comprat')

    this.c.vaciarcarro();
    window.location.reload();
  }



  async seleccionarMoneda($event: Event) {

    const apiJSON = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,binancecoin,ethereum,dollars&vs_currencies=eur')
    const valors = await apiJSON.json();

    var select = document.getElementById("moneda");
    // @ts-ignore
    var opcionSeleccionada = select.value;

    if (opcionSeleccionada === "opcion1") {
      this.preuPoducte = this.preutotal();
      this.simbolMoneda = " €";
      this. preuActual = 1;
      this.monedaHistorial = "EUR"
      console.log("Se seleccionó EURO");

    } else if (opcionSeleccionada === "opcion2") {
      this.preuPoducte = this.preutotal() / valors.dollars.eur;
      this.simbolMoneda = " $";
      this. preuActual = valors.dollars.eur;
      this.monedaHistorial = "DOLL"
      console.log("Se seleccionó DOLL");

    } else if (opcionSeleccionada === "opcion3") {
      this.preuPoducte = this.preutotal() / valors.bitcoin.eur;
      this.simbolMoneda = " BTC";
      this. preuActual = valors.bitcoin.eur;
      this.monedaHistorial = "BTC"
      console.log("Se seleccionó BTC");

    } else if (opcionSeleccionada === "opcion4") {
      this.preuPoducte = this.preutotal() / valors.binancecoin.eur;
      this. preuActual = valors.binancecoin.eur;
      this.simbolMoneda = " BNB";
      this.monedaHistorial = "BNB"
      console.log("Se seleccionó BNB");
    }
  }


}


