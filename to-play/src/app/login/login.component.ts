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
  
  user = {
    email: '',
    pass: '',
  };
  users = [] ;

  constructor(private router: Router, private service: LoginService, private dataStorage: DataStorageService) {
    this.dataStorage.isHome = false;
   }


  login(){
    this.service.login(this.user).subscribe(data => {
      if(data['email'] == this.user.email){
        this.dataStorage.user = this.user;
        this.dataStorage.logged = true;
        this.router.navigate(["/home"]);
        
      }
    })
    
    
  }

  criarConta() {
    this.router.navigate(["/createAccount"]);
  }

}
