import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  carro: Product[] = [];

  constructor(private http: HttpClient) { }

  añadircarrito(product: Product){
    this.carro.push(product);
  }

  getcarro(){
    return this.carro;
  }

  vaciarcarro(){
    this.carro = [];

    return this.carro;
  }

  eliminarproductodelcarro(index:any){
    this.carro.splice(index, 1);
  }



}
