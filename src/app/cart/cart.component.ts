import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {ValidationService} from '../validation.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

public myData = [
  {name:"product1",price:1000,brandName:"Puma"},
  {name:"product2",price:2000,brandName:"Nike"},
  {name:"product3",price:3000,brandName:"Leecooper"}
]

public myData1:any;
  constructor(public myvar:ValidationService) { 
    //alert(2)
    console.log("cart======")
    console.log(this.myvar)

  }

  ngOnInit() {
    console.log(this.myvar)
    this.myvar.select().subscribe(
      (Response)=>{
        console.log("yes")
        console.log(Response)
        this.myData1 = Response
      },
      (error)=>{
        console.log("no")
        console.log(error)
      }
    )
  }

}
