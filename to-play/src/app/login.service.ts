import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { DataStorageService } from './data-storage.service';
import { Injectable } from '@angular/core';


@Injectable()
export class LoginService {

  private url = "http://localhost:8080/games";

  constructor(private dataStorage: DataStorageService,
              private http: HttpClient,) { }

  login(user){
    this.getUser();
    if(user.email == "adm@adm.com" && user.pass == "adm"){
      this.dataStorage.user = user;
      this.dataStorage.user.adm = true;
      this.dataStorage.logged = true;
      return true;
    }
    if(user.email == "visitor@adm.com" && user.pass == "visitor"){
      this.dataStorage.user = user;
      this.dataStorage.logged = true;
      return true;
    }
    return false;
  }

  getUser(){
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    try {
      this.http.get(this.url, {headers: header}).subscribe(res => console.log(res));
    } catch (error) {
      console.log("erroooooou");
    }
    ;
  }

  createUser(){

  }

}
