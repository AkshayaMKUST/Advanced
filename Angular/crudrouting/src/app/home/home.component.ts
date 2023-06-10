import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/Product';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productId : number|any;
  products: Product[] | any;

  constructor(private productservice: ProductserviceService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
    this.productservice.getProductList().subscribe(data => {
      this.products = data;
    });
  }

  productDetails(productId: number){
    this.router.navigate(['product-details', productId]);
  }

  updateProduct(productId: number){
    this.router.navigate(['update-product', productId]);
  }
  

  deleteProduct(productId: number){
    this.productservice.deleteprod(productId).subscribe( data => {
      console.log(data);
      this.getProducts();
    })
  }
}
