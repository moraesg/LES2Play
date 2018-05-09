import { CartComponent } from './cart/cart.component';
import { DataStorageService } from './data-storage.service';
import { GenderService } from './gender.service';
import { GameService } from './game.service';
import { GameComponent } from './game/game.component';
import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataStorage: DataStorageService) {

  }
}
