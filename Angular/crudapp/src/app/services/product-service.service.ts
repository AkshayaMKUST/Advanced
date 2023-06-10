 
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
import { Product } from '../model/Product';
   
  
  @Injectable({
    providedIn: 'root'
  })
  export class ProductService {
  
    constructor(private http: HttpClient) { }
  
    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>("http://localhost:8080/product/api.2.0/retrieve/all");
    }
  
    saveProduct(product: Product): Observable<Object> {
      return this.http.post("http://localhost:8080/product/api.2.0/create", product);
    }
  
    getProductById(id: number): Observable<Product> {
      return this.http.get<Product>(`http://localhost:8080/product/api.2.0/retrieve/${id}`);
    }
  
    updateProduct(product: Product): Observable<Object> {
      return this.http.put(`http://localhost:8080/product/api.2.0/update/${product.productId}`, product);
    }
  
    deleteprod(id:number):Observable<Object>{
      return this.http.delete(`http://localhost:8080/product/api.2.0/delete/${id}`);
    }
   
  }