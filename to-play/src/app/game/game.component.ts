import { Component, OnInit } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'game-content',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{
  title: string;
  descr: string;

  constructor(private bsModalRef:BsModalRef) { }
  
  ngOnInit(){
    
  }
}
