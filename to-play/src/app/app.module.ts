import { LoginService } from './login.service';
import { GenderService } from './gender.service';
import { GameService } from './game.service';
import { AppRoutesModule } from './app-routes/app-routes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    AppRoutesModule,
    HttpClientModule
  ],
  providers: [GameService, GenderService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
