import { CartComponent } from './../cart/cart.component';
import { GameComponent } from './../game/game.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  {path: 'games', component: GameComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutesModule {

  private url = "http://localhost:8080/";

  constructor(private http: HttpClient){

  }
  getGames(){
    return this.http.get(this.url + "games");
  }
}
