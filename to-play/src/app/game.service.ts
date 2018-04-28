import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  private url = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getGames(){
    return this.http.get(this.url + "/games");
  }
}
