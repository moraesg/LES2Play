import { ApiServiceService } from './../api-service.service';
import { AppRoutingModule } from './../app-routing.module';
import { User } from './../models/user';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { DataStorageService } from './data-storage.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Config } from 'protractor';
@Injectable()
export class LoginService {

  _urlUsers = "";
  _urlLogin = "";

  constructor(private dataStorage: DataStorageService,
              private http: HttpClient, private api: ApiServiceService) {
                this._urlUsers = api.url + "users";
                this._urlLogin = api.url + "login";
              }

  login(user){
    try {
      console.log(user);
      return this.http.post(this._urlLogin, user);
    } catch (error) {
      console.log(error);
    }
  }

  createUser(user){
    try {
      return this.http.post(this._urlUsers, user);
    } catch (error) {
      console.log(error);
    }
  }

}
