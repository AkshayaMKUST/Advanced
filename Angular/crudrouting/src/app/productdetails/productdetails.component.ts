import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/Product';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  productId: number|any; 
  product: Product |any;
  constructor(private route: ActivatedRoute, private productservice: ProductserviceService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];

    this.product = new Product();
    this.productservice.getProductById(this.productId).subscribe( data => {
      this.product = data;
    }); 
  }
  // getProductById(): void {
  //   this.productservice.getProductById(this.productId).subscribe(
  //     (data) => {
  //       this.product = data;
  //     },
  //     (error) => {
  //       console.log('Error retrieving product:', error)});
  //     }
}




