import { Component } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../services/product-service.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  productId: number = 0;
  product: any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  DeleteProduct(): void {
    this.productService.deleteprod(this.productId).subscribe(
      (data) => {
        console.log("Product Deleted Successfully");
      },
      (error) => {
        console.log('Error retrieving product:', error);
      }
    );
  }
}
