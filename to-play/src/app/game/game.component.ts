import { DataStorageService } from './../data-storage.service';
import { Component } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'game-content',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent{
  game = '';

  constructor(private bsModalRef:BsModalRef, private dataStorage: DataStorageService) {
    this.game = this.dataStorage.game;
   }

}
