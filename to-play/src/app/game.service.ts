import { AppRoutesModule } from './app-routes/app-routes.module';
import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  constructor(private route: AppRoutesModule) {

  }

  getGames() {
    var games = [];
    for (var i = 0; i < 10; i++) {
      games.push({
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
    return games;
  }

}
