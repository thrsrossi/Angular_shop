import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ICartItem } from 'src/app/interfaces/ICartItem';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.css']
})
export class CartContainerComponent implements OnInit {

    cart: ICartItem[];
    totalPrice: number;

    constructor(private cartService: CartService) {}

    ngOnInit() {
        this.cart = this.cartService.getCart();
        this.totalPrice = this.cartService.getTotalPrice();

        this.cartService.totalPriceCart$.subscribe(
            cartTotal => {
                this.totalPrice = cartTotal;
            }
        );
    }
}
