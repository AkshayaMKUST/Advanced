import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';
import { ProductService } from '../services/product-service.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product: Product = new Product();
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.product);
    this.saveProduct();
  }

  saveProduct(){
    this.productService.saveProduct(this.product).subscribe((data)=>{
      console.log(data);
    },
    error=>console.log(error));
  }

}
