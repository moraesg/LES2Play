import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { User } from './../models/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  user: User = {
    email: '',
    pass: '',
    adm: false,
    name: ''
  };

  constructor(private service:LoginService, private router: Router) { }

  createAccount() {
    if(this.service.createUser(this.user)){
      this.router.navigate(["/login"]);
    }
  }

}
