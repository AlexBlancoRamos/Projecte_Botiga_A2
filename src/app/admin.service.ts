import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public autenticat = false;
  public posAuntenticat = -1;
  public client: any;

  constructor(private http:HttpClient) {
    this.http.get<any>('http://localhost:3080/admin').subscribe((document)=>{
      this.client = document;
    });
  }
}
