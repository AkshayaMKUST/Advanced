import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingcart';
  cartItems: any[] = [];
  addToCart(product: any) {
    this.cartItems.push(product);
  }
}
