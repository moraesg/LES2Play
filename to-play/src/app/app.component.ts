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
  title = 'app';
  modal: BsModalRef;
  searchBox = '';
  filter = [];

  games = [];
  genders = [];

  constructor(private modalService: BsModalService, private service: GameService) {
    this.init();
  }

  init() {
    this.games = [];
    for (var i = 0; i < 30; i++) {
      this.games.push({
        name: "game" + (i + 1),
        synopse: "game",
        tags: "tag" + i,
        price: i + 1,
        releaseDate: i + "/" + i + "/" + i,
        developer: "developer" + i,
        editor: "editor" + i,
        gender: "gender " + i,
        rating: i,
        imgsrc: "../assets/img/search.png"
      });

    }
    this.games.sort((a, b) => {
      if (a.name < b.name)
        return -1;
      if (a.name < b.name)
        return 1;
      return 0;
    });
    //service.getGames().subscribe(data => this.games);
    for (var i = 0; i < 10; i++) {
      this.genders.push("gender " + (i + 1));
    }
  }

  openModal(game): void {
    this.modal = this.modalService.show(GameComponent, game);

  }
  closeModal(): void {
    this.modal.content()
  }

  search() {
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
  }
}
