import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { MockDataService } from './mock-data.service';
import { Subscription } from 'rxjs';

describe('CartService', () => {
    let service: CartService;
    const mockData = new MockDataService();

    beforeEach(() =>  {
          sessionStorage.clear();
          service = TestBed.get(CartService);
        //   TestBed.configureTestingModule({
        //       providers: [ CartService, MockDataService ]
        //   });
      });

    // afterEach(() => {

    //     // let subscription.unsubscribe();
    // });

    it('should be created', () => {
        // const service: CartService = TestBed.get(CartService);
        expect(service).toBeTruthy();
      });

    it('should add movie to cart', () => {
        // const service: CartService = TestBed.get(CartService);

        // const mockService = new MockDataService();
        const subscription = mockData.getData().subscribe(
            movies => {
                expect(service.getCart().length).toBe(0);
                service.setCart(movies[0]);
                expect(service.getCart().length).toBe(1);
            }
        );
        subscription.unsubscribe();
      });
    it('should add to same row in cart and add to quantity if movie added exists in cart', () => {
        const subscription = mockData.getData().subscribe(
            movies => {
                expect(service.getCart().length).toBe(0);
                service.setCart(movies[0]);
                expect(service.getCart().length).toBe(1);
                expect(service.getCart()[0].quantity).toBe(1);

                service.setCart(movies[0]);
                expect(service.getCart().length).toBe(1);
                expect(service.getCart()[0].quantity).toBe(2);
            }
        );
        subscription.unsubscribe();
      });
    it('should add new row if movie does not exist in cart', () => {
        const subscription = mockData.getData().subscribe(
            movies => {
                expect(service.getCart().length).toBe(0);
                service.setCart(movies[0]);
                expect(service.getCart().length).toBe(1);

                service.setCart(movies[1]);
                expect(service.getCart().length).toBe(2);

                // service.setCart(movies[1]);
                // expect(service.getCart().length).toBe(2);
                // service.setCart(movies[2]);
                // expect(service.getCart().length).toBe(3);
            }
        );
        subscription.unsubscribe();
      });

    it('removeCartItem() should remove whole row in cart', () => {
        const subscription = mockData.getData().subscribe(
            movies => {
                expect(service.getCart().length).toBe(0);
                service.setCart(movies[0]);
                expect(service.getCart().length).toBe(1);

                service.setCart(movies[1]);
                expect(service.getCart().length).toBe(2);
                service.setCart(movies[2]);
                expect(service.getCart().length).toBe(3);

                service.removeCartItem(movies[1]);
                expect(service.getCart().length).toBe(2);
                // service.removeCartItem(movies[0]);
                // expect(service.getCart().length).toBe(1);
            }
        );
        subscription.unsubscribe();
      });

    it('addOneMovie() should add to quantity in cart', () => {
        const subscription = mockData.getData().subscribe(
            movies => {
                expect(service.getCart().length).toBe(0);
                service.setCart(movies[0]);
                expect(service.getCart().length).toBe(1);
                expect(service.getCart()[0].quantity).toBe(1);

                service.setCart(movies[0]);
                expect(service.getCart().length).toBe(1);
                expect(service.getCart()[0].quantity).toBe(2);

                service.addOneMovie(movies[0]);
                expect(service.getCart().length).toBe(1);
                expect(service.getCart()[0].quantity).toBe(3);
            }
        );
        subscription.unsubscribe();
      });

    it('removeOneMovie() should subtract to quantity in cart and remove row if quantity is zero', () => {
        const subscription = mockData.getData().subscribe(
            movies => {
                expect(service.getCart().length).toBe(0);
                service.setCart(movies[0]);
                expect(service.getCart().length).toBe(1);
                expect(service.getCart()[0].quantity).toBe(1);

                service.setCart(movies[0]);
                expect(service.getCart().length).toBe(1);
                expect(service.getCart()[0].quantity).toBe(2);

                service.removeOneMovie(movies[0]);
                expect(service.getCart().length).toBe(1);
                expect(service.getCart()[0].quantity).toBe(1);

                service.removeOneMovie(movies[0]);
                expect(service.getCart().length).toBe(0);
                expect(service.getCart()[0].quantity).toBe(0);
            }
        );
        subscription.unsubscribe();
      });

    // it('removeOneMovie() ... should subtract to quantity in cart and remove row if quantity is zero', () => {
    //     const mockService = new MockDataService();
    //     mockService.getData().subscribe(
    //         movies => {
    //             expect(service.getCart().length).toBe(0);
    //             service.setCart(movies[0]);
    //             expect(service.getCart().length).toBe(1);

    //             console.log(service.getCart());
    //             console.log(service.getCart()[0].quantity);

    //             // expect(service.getCart()[0].quantity).toBe(1);
    //         }
    //     );
    //   });

    // it('culculateTotalPrice should calculate total price', () => {
    //     mockData.getData().subscribe(
    //         movies => {
    //             // expect(service.getCart().length).toBe(0);
    //             // service.setCart(movies[0]);
    //             // expect(service.getCart().length).toBe(1);
    //             // expect(service.getCart()[0].quantity).toBe(1);
    //             // expect(service.getCart()[0].movie.price).toBe(80);

    //             // service.setCart(movies[0]);
    //             // expect(service.getCart().length).toBe(1);
    //             // expect(service.getCart()[0].quantity).toBe(2);

    //             // service.setCart(movies[1]);
    //             // expect(service.getCart().length).toBe(2);
    //             // expect(service.getCart()[1].quantity).toBe(1);

    //             // service.culculateTotalPrice();
    //             // service.getTotalPrice();
    //             // expect(service.getTotalPrice()).toBe(165);


    //         }
    //     );
    //   });

});
