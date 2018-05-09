import { DataStorageService } from './../data-storage.service';
import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  
  email = '';
  pass = '';

  constructor(private router: Router, private service: LoginService, private dataStorage: DataStorageService) { }

  login(){
    if(this.service.login({email: this.email, pass: this.pass, adm: false})){ 
      this.router.navigate(["/home"]);
    }
  }

}
