import { DataStorageService } from './../services/data-storage.service';
import { Component } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cart = []
  
  constructor(private dataStorage: DataStorageService) { 
    this.cart = dataStorage.cart;
  }

  removeGame(game){
    this.cart.splice(this.cart.indexOf(game),1);
    this.dataStorage.cart = this.cart;
  }

}
