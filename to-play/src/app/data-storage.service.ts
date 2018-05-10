import { Game } from './models/game';
import { User } from './models/user';
import { Injectable } from '@angular/core';

@Injectable()
export class DataStorageService {

  constructor() { }

  game: Game = {};
  user: User = {
    email: '',
    pass: '',
    adm: false,
    name: '',
  };
  cart = [];
  logged = false;

}
