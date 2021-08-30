import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private _HttpClient:HttpClient) { }

  getProductsList():Observable<any>
  {
    return this._HttpClient.get(`https://fakestoreapi.com/products?limit=10`)
  }

  getproductDetails(id:number):Observable<any>
  {
    return this._HttpClient.get(`https://fakestoreapi.com/products/${id}`)

  }

  addProduct(createBody:any){
    return this._HttpClient.post('https://fakestoreapi.com/products',createBody)
  }
}
