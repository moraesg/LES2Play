import { AppRoutesModule } from './../app-routes/app-routes.module';
import { Injectable } from '@angular/core';

@Injectable()
export class GenderService {

  constructor(private route: AppRoutesModule) { }

  getGenders() {
    var genders = []
    for (var i = 0; i < 10; i++) {
      genders.push("gender " + (i + 1));
    }
    return genders;
  }

}
