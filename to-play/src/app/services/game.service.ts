import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from './../api-service.service';
import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  _url = "";

  constructor(private api: ApiServiceService, private http: HttpClient){
    this._url = api.url + "games";
  }

  getGames() {
    try{
      return this.http.get(this._url);

    }catch(error){
      console.log(error);
    }
  }

  createGame(game){
    try{
      console.log(game);

      return this.http.post(this._url, game);
    }catch(error){
      console.log(error);
    }
  }

}
