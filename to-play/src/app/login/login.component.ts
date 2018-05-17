import { DataStorageService } from './../services/data-storage.service';
import { LoginService } from './../services/login.service';
import { User } from './../models/user';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  
  user: User = {
    email: '',
    pass: '',
    adm: false,
    name: ''
  };

  constructor(private router: Router, private service: LoginService, private dataStorage: DataStorageService) { }

  login(){
    if(this.service.login(this.user)){ 
      this.router.navigate(["/home"]);
    }
  }

  criarConta() {
    this.router.navigate(["/createAccount"]);
  }

}
