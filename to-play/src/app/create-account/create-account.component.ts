import { DataStorageService } from './../services/data-storage.service';
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
    name: '',
    type: 0
  };

  constructor(private dataStorage: DataStorageService,private service:LoginService, private router: Router) {
    this.dataStorage.isHome = false;

   }

  createAccount() {
    let data = {
      email: this.user.email,
      username: this.user.name,
      password: this.user.pass,
      type: this.user.type
    };
    if(this.service.createUser(data).subscribe()){
      this.router.navigate(["/login"]);
    }
  }

}
