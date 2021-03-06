import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PrintMoviesComponent } from './components/print-movies/print-movies.component';
import { ModalComponent } from './components/modal/modal.component';
import { CartComponent } from './components/cart/cart.component';
import { DataService } from './services/data.service';
import { MockDataService } from './services/mock-data.service';
import { PrintCartItemsComponent } from './components/print-cart-items/print-cart-items.component';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { PrintCartContainerComponent } from './components/print-cart-container/print-cart-container.component';
import { CartService } from './services/cart.service';
import { CartAsideComponent } from './components/cart-aside/cart-aside.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderConfirmedComponent } from './components/order-confirmed/order-confirmed.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PrintOrdersComponent } from './components/print-orders/print-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrintMoviesComponent,
    ModalComponent,
    CartComponent,
    PrintCartItemsComponent,
    CartContainerComponent,
    PrintCartContainerComponent,
    CartAsideComponent,
    CheckoutComponent,
    OrderFormComponent,
    OrderConfirmedComponent,
    AdminComponent,
    NotFoundComponent,
    PrintOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ DataService, CartService, MockDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
