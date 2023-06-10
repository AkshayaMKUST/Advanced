import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http: HttpClient) { }

  baseurl="http://localhost:8080/product/api.2.0/"
  
    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>("http://localhost:8080/product/api.2.0/retrieve/all");
    }
  
    saveProduct(product: Product): Observable<Object> {
      return this.http.post(`${this.baseurl}create`, product);
    }
    getProductById(productId: number): Observable<Product> {
      return this.http.get<Product>(`http://localhost:8080/product/api.2.0/retrieve/${productId}`);
    }
  
    updateProduct(product: Product): Observable<Object> {
      return this.http.put(`http://localhost:8080/product/api.2.0/update`, product);
    }
    getProductList(): Observable<Product[]>{
      return this.http.get<Product[]>(`${this.baseurl}retrieve/all`);
    }
    deleteprod(id:number):Observable<Object>{
      return this.http.delete(`http://localhost:8080/product/api.2.0/delete/${id}`);
    }
  
  
  
}
