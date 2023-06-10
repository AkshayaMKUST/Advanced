import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product: Product = new Product();
  constructor(private productservice : ProductserviceService){}

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.product);
    this.saveProduct();
  }

  saveProduct(){
    this.productservice.saveProduct(this.product).subscribe((data)=>{
      console.log(data);
      
    },
    error=>console.log(error));
  }

}
