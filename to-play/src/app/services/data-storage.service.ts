import { User } from './../models/user';
import { Game } from './../models/game';
import { Injectable } from '@angular/core';

@Injectable()
export class DataStorageService {

  game: Game = {};
  user: User = {
    email: '',
    pass: '',
    adm: false,
    name: '',
  };
  cart = [];
  logged = false;

  constructor() { }

  

}
