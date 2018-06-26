import { AppRoutesModule } from './app-routes/app-routes.module';
import { ApiServiceService } from './api-service.service';
import { DataStorageService } from './services/data-storage.service';
import { LoginService } from './services/login.service';
import { GenderService } from './services/gender.service';
import { GameService } from './services/game.service';
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
import { CreateAccountComponent } from './create-account/create-account.component';
import { AddGameComponent } from './add-game/add-game.component';
import { PopupConfirmComponent } from './popup-confirm/popup-confirm.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    LoginComponent,
    CartComponent,
    HomeComponent,
    CreateAccountComponent,
    AddGameComponent,
    PopupConfirmComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    AppRoutesModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [GameService, GenderService, LoginService, DataStorageService, ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
