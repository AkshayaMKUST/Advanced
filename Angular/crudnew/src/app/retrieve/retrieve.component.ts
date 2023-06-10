import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})

  export class RetrieveComponent implements OnInit {
    ngOnInit(): void {
      this.products=this.getProducts();
    }
    constructor(private service:ProductService)
  {}
  products: Product[]=[];
  tempProd:Product|undefined;
  
  getProducts():any{
    this.service.getProducts().subscribe((products)=>{
    this.products=products;
    });
  }
  DeleteProduct(id:number): void {
    this.service.deleteprod(id).subscribe(
      (data) => {
        console.log("Product Deleted Successfully");
      },
      (error) => {
        console.log('Error retrieving product:', error);
      }
    );
  }
  tempProduct(product:Product):void{
    this.tempProd={...product};
  }

  UpdateProduct():void{
    if(this.tempProd){
    this.service.updateProduct(this.tempProd).subscribe((data)=>{
      console.log("Updated details successfully");
    },
    (error)=>{console.log("Error updating product"),error});
  }
}
  
  }
  
