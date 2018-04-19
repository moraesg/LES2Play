import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  games = [];

  constructor(){
    for(var i = 0; i < 30; i++){
      this.games.push({title: "game" + (i+ 1), desc: "game"});
    }
  }
}
