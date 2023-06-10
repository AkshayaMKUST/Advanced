import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../services/product-service.service';


@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.products=this.getProducts();
  }
  constructor(private service:ProductService)
{}
products: Product[]=[];

getProducts():any{
  this.service.getProducts().subscribe((products)=>{
  this.products=products;
  });
}


}
