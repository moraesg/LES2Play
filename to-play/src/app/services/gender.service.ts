import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Injectable()
export class GenderService {

  constructor(private http: HttpClient, private api: ApiServiceService) { }

  getGenders() {
    try {
      return this.http.get(this.api.url + "genres");
    } catch (error) {
      console.log(error);
    }
  }

}
