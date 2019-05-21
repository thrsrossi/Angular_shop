import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieShop';

    toggleVisibility: boolean;

  toggleCart() {
    this.toggleVisibility = !this.toggleVisibility;
  }
}
