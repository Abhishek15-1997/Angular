import { Component, OnInit, Input, Output } from '@angular/core';
import {myProduct } from '../myProduct';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  @Output()products:  myProduct[];


  ngOnInit() {
    this.products = [
      {productID: 10 ,name : "Mouse" , price : 1000},
      {productID: 11 ,name : "Plotter" , price : 1000},
      
      {productID: 12 ,name : "Scanner" , price : 1000},
      
      {productID: 13 ,name : "Printer" , price : 1000},
      
      {productID: 14 ,name : "Monitor" , price : 1000}
      
      ];
  }

}
