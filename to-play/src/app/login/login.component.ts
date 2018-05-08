import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private service: LoginService) { }

  login(email, pass){
    if(this.service.login(email, pass)){
      console.log("Login realizado");
    }
    else{
      console.log("Login não realizado");
    }
  }

}
