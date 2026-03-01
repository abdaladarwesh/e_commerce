import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private http = inject(HttpClient);
  getProducts(){
    return this.http.get<product[]>("https://api.escuelajs.co/api/v1/products");
  }

  getProduct(id:number){
    return this.http.get<product>(`https://api.escuelajs.co/api/v1/products/${id}`)
  }
}
