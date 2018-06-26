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

  _url = "";

  constructor(private dataStorage: DataStorageService,
              private http: HttpClient, private api: ApiServiceService) {
                this._url = api.url + "users";
              }

  login(user){
    try {
      //return this.http.get(this._url)
      return this.http.post(this._url, user);
    } catch (error) {
      console.log(error);
    }
  }

  createUser(user){
    try {
      return this.http.post(this._url, user);
    } catch (error) {
      console.log(error);
    }
  }

}
