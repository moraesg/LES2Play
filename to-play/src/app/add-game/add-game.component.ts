import { Component } from '@angular/core';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent {

  game = {
    name: "",
    synopse: "",
    tags: "",
    price: "",
    releaseDate: "",
    developer: "",
    editor: "",
    gender: "",
    rating: "",
    imgsrc: ""
  }

  constructor() { }

}
