import { Injectable } from '@angular/core';

@Injectable()
export class TagService {

  constructor() { }

  getTags(){
    let tags = [];
    for(var i = 0; i < 10; i++){
      tags.push("tag" + i);
    }
    return tags;
  }

}
