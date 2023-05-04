import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Product} from "../product";
import {ServeiProductService} from "../servei-product.service";
import {CarritoService} from "../carrito.service";

@Component({

  selector: 'app-cataleg',
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.css'],

})
export class CatalegComponent implements OnInit{
  //@ts-ignore
  productes: Product[];
  fotos:any;
  text:any;
  mostrar:any;
  currentRate1 = 0;
  currentRate2 = 8;
  currentRate3 = 8;
  currentRate4 = 8;
  currentRate5 = 8;
  currentRate6 = 8;
  currentRate7 = 8;
  currentRate8 = 8;
  currentRate9 = 8;
  currentRate10 = 8;
  currentRate11 = 8;
  currentRate12 = 8;
  currentRate13 = 8;
  currentRate14 = 8;
  currentRate15 = 8;
  carro= this.c.getcarro();

  anadircarrito(productes: Product): void{
    this.http.post<any>('http://localhost:3080/cesta',{
      text: `  L'usuari: ${this.mostrar}  a afegit a la cesta un producto`
    }).subscribe((a)=> {
      alert('hola')
    });

    this.c.añadircarrito(productes);
  }

  ngOnInit():void {
    this.mostrar = localStorage.getItem("nombre")

    this.s.info_product().subscribe(productes =>{
      this.productes = productes;
    })

  }
  constructor(private http: HttpClient, private s: ServeiProductService, private c: CarritoService) {
  }
}
