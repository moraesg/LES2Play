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

  games = [];
  genders = [];

  constructor(private dataStorage: DataStorageService,private modalService: BsModalService, private gameService: GameService, private genderService: GenderService) {
    this.init();
    setTimeout(()=> dataStorage.compra = false,1000);
  }

  init() {
    this.dataStorage.isHome = true;
    this.getGames()
    this.genderService.getGenders();
    
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
    this.gameService.getGames().subscribe(data => this.games = data);
  }

  openModal(game): void {
    this.dataStorage.game = game;
    this.modal = this.modalService.show(GameComponent);  
  }
  
  searchGender() {
    this.init();
    if (this.filter.length) {
      let filteredGames = this.games.filter((game)=>{
        return this.filter.includes(game.gender);
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

  searchTitle(){
    this.init();
    let filteredGames = this.games.filter((game)=>{
      console.log(game.name + " " + this.searchBox);
      return this.searchBox.includes(game.name);
    }); 
    this.games = filteredGames;
  }
}
