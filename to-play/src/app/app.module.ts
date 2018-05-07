import { GenderService } from './gender.service';
import { GameService } from './game.service';
import { AppRoutesModule } from './app-routes/app-routes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    AppRoutesModule,
    HttpClientModule
  ],
  providers: [GameService, GenderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
