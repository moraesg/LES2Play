import { DataStorageService } from './../services/data-storage.service';
import { FormsModule } from '@angular/forms';
import { GenderService } from './../services/gender.service';
import { GameService } from './../services/game.service';
import { GameComponent } from './../game/game.component';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  user = "";
  title = 'app';
  modal: BsModalRef;
  searchBox = '';
  filter = [];

  backupgames = []
  games = [];
  genders = [];

  constructor(private dataStorage: DataStorageService,private modalService: BsModalService, private gameService: GameService, private genderService: GenderService) {
    this.init()
    this.dataStorage.isHome = true;
    this.getGames();
    this.getGenres();
    setTimeout(()=> dataStorage.compra = false,1000);
  }

  init() {
    this.games.sort((a, b) => {
      if (a.name < b.name)
        return -1;
      if (a.name < b.name)
        return 1;
      return 0;
    });
    
  }

  getGenres(){
    this.genderService.getGenders().subscribe(data=> this.genders = data);
  }

  getGames(){
    this.gameService.getGames().subscribe(data =>{
      this.games = data;
      this.backupgames = data});
  }

  openModal(game): void {
    this.dataStorage.game = game;
    this.modal = this.modalService.show(GameComponent);  
  }
  
  searchGender() {
    this.resetFiltro();
    if (this.filter.length) {
      let filteredGames = this.games.filter((game)=>{
        return this.filter.includes(game.genre);
      });
      this.games = filteredGames;
    }
  }

  setFilter(gender): void {
    let status = this.filter.indexOf(gender);
    if (status != -1) {
      this.filter.splice(status, 1);
    }
    else {
      this.filter.push(gender);
    }
    this.searchGender();
  }

  addCart(game){
    this.dataStorage.cart.push(game);
  }

  isInCart(game){
   return this.dataStorage.cart.find((cartGame)=>{
     return game == cartGame;
   });
    
  }
  
  resetFiltro(){
    this.games = this.backupgames;
    this.init();
  }
}
