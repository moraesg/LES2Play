import { DataStorageService } from './../services/data-storage.service';
import { GameService } from './../services/game.service';
import { GenderService } from './../services/gender.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent {

  genders = [];
  tags = [];
  games = [];

  game = {
    name: "",
    synopse: "",
    tags: "",
    price: "",
    releaseDate: "",
    developer: "",
    editor: "",
    genre: "",
    rating: "",
    imgsrc: ""
  };

  constructor(private dataStorage: DataStorageService, private genderService: GenderService, private gameService: GameService) {
    this.dataStorage.isHome = false; 
    this.genderService.getGenders().subscribe(data => this.genders = data);
    this.gameService.getGames().subscribe(data =>{this.games = data
      let genre = this.games.pop().genre
      if(!this.tags.findIndex(genre)){
        this.tags.push(genre);
      }
    });
  }

  addGame(){
    this.gameService.createGame(this.game);
  }

}
