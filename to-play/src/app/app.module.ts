import { DataStorageService } from './data-storage.service';
import { LoginService } from './login.service';
import { GenderService } from './gender.service';
import { GameService } from './game.service';
import { AppRoutesModule } from './app-routes/app-routes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    LoginComponent,
    CartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    AppRoutesModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GameService, GenderService, LoginService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
