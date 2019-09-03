import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { myProduct } from '../myProduct';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products : myProduct[];
  product : myProduct;
  
id:number;
sub;
constructor(private _Activatedroute:ActivatedRoute,
  private _router:Router,
) 
{
}
  ngOnInit() {
    this.products = [
      {productID: 10 ,name : "Mouse" , price : 1000},
      {productID: 11 ,name : "Plotter" , price : 1000},
      
      {productID: 12 ,name : "Scanner" , price : 1000},
      
      {productID: 13 ,name : "Printer" , price : 1000},
      
      {productID: 14 ,name : "Monitor" , price : 1000}
      
      ];
  
//   onClick2(value:number)
//   {
    
//      for (let index = 0; index < this.products.length; index++) {
       
//        if(this.products[index].productID == value)
//        {
//           this.product = this.products[index];
//        }
       
//      }
// //     this.product=this.products.find(x=>x.productID===value);
// //     alert(value);
// // alert(this.products.length);
//      console.log(this.product.productID);      ;                   ;
//   }






         
   this.sub=this._Activatedroute.params.subscribe(params => { 
       this.id = params['productID']; 
  //     let products=this._productService.getProducts();
    
  this.product=this.products.find(p => p.productID==this.id);    
   
   });
}
ngOnDestroy() {
  this.sub.unsubscribe();
}
 

}
