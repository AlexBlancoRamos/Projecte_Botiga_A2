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
    return total;
  }

  ngOnInit() {
    this.mostrar = localStorage.getItem("nombre")

  }

  data_compra: any;

  comprar() {
    if(this.mostrar == null){
      this.mostrar = 'invitado';
    }

    const data = new Date();
    this.data_compra= this.datePipe.transform(data,'yyyy-MM-dd');
    for(let i=0;i<this.carro.length;i++){
      let query = `INSERT INTO botiga.historial_ventes (email, producte, oferta, data_compra) VALUES (?,?,?,?)`;
      let values =[this.mostrar,this.carro[i].id,false,this.data_compra];
      this.http.post('http://localhost:3080/insert_compra',{query,values}).subscribe();
    }

    this.http.post<any>('http://localhost:3080/comprar', {
      texto: ` L'usuari: ${this.mostrar}  a comprat.`

    }).subscribe();
    alert('comprat')

    this.c.vaciarcarro();
    window.location.reload();
  }
}
