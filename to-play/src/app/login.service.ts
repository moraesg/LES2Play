import { DataStorageService } from './data-storage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor(private dataStorage: DataStorageService) { }

  login(user){
    if(user.email == "adm@adm.com" && user.pass == "adm"){
      this.dataStorage.user = user;
      this.dataStorage.user.adm = true;
      return true;
    }
    if(user.email == "visitor@adm.com" && user.pass == "visitor"){
      this.dataStorage.user = user;
      return true;
    }
    return false;
  }

}
