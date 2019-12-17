import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
