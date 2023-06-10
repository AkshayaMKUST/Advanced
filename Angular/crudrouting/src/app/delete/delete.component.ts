import { Component } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  productId: number = 0;
  product: any;
  constructor(private productservice: ProductserviceService) { }

  ngOnInit(): void {
  }

  DeleteProduct(): void {
    this.productservice.deleteprod(this.productId).subscribe(
      (data) => {
        console.log("Product Deleted Successfully");
      },
      (error) => {
        console.log('Error retrieving product:', error);
      }
    );
  }

}
