import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ServeiProductService {

  info_product():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3080/info_prod");
  }

  constructor(private http: HttpClient) {
  }
}
