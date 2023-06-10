import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  productId: number = 0;
  product: any;

  constructor(private productService: ProductserviceService ,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.productId=this.route.snapshot.params['productId'];
    this.productService.getProductById(this.productId).subscribe(
      (product) => {
        this.product = product;
      },
      (error) => {
        console.log('Error retrieving product:', error);
      }
    );
  }


 

  saveUpdatedProduct(): void {
    if(this.product){
    this.productService.saveProduct(this.product).subscribe(
      (response) => {
        console.log('Product updated successfully');
        this.goToProductList();
      },
      (error) => {
        console.log('Error updating product:', error);
      }
    
    );

  }
}
goToProductList(){
  this.router.navigate(['get-product']);
}
}

