import { User } from './../models/user';
import { Game } from './../models/game';
import { Injectable } from '@angular/core';

@Injectable()
export class DataStorageService {

  game: Game = {};
  user = {
    email: '',
    pass: '',
  };
  cart = [];
  logged = false;
  compra = false;

  isHome;

  constructor() { }

  

}
