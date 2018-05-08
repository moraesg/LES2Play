import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  login(email, pass){
    if(email == "adm" && pass == "adm"){
      return true;
    }
    return false;
  }

}
