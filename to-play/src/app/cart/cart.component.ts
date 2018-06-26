import { Router } from '@angular/router';
import { PopupConfirmComponent } from './../popup-confirm/popup-confirm.component';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataStorageService } from './../services/data-storage.service';
import { Component } from '@angular/core';
import { ModalModule, BsModalService } from 'ngx-bootstrap';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cart = [];
  modal: BsModalRef;
  
  constructor(private router: Router,public dialog: MatDialog, private dataStorage: DataStorageService, private modalService: BsModalService) { 
    this.cart = dataStorage.cart;
    this.dataStorage.isHome = false;

  }

  removeGame(game){
    this.cart.splice(this.cart.indexOf(game),1);
    this.dataStorage.cart = this.cart;
  }

  buyGames(){
    this.router.navigate(['/home']);
    this.dataStorage.compra = true;
    this.cart = [];
    this.dataStorage.cart = [];
  }

}
