import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(public httpdata:HttpClient) { 
    console.log(this.httpdata)
    // alert(111)
    // console.log("===")
  }

  name(){
    return 1;
  }
  mobile(){
    return 2;
  }
  email(){
    return 3;
  }
  password(){
    return 4;
  }

  select(){
    return this.httpdata.get("https://jsonplaceholder.typicode.com/posts")
  }
}
