import { TagService } from './../services/tag.service';
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
  };

  constructor(private genderService: GenderService, private tagService: TagService) { 
    this.genders = this.genderService.getGenders();
    this.tags = this.tagService.getTags();
  }

}
