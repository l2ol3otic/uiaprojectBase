import { Injectable } from '@angular/core';

@Injectable()
export class DataprocessingService {

  constructor() { }

  findsectioncode(data,match){
    
    for (var i=0; i < data.length; i++) {

      if (data[i].section_x === match) {
        return data[i].section_code;
      }
    }
  }
  findusercode(data,match){
    for (var i=0; i < data.length; i++) {

      if (data[i].user_name === match) {
        return data[i].user_code;
      }
    }
  }

}
