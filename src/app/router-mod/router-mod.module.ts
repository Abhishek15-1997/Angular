import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { Routes } from '@angular/router'; 
import { ProductsComponent } from '../products/products.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';



export const RoutesTable : Routes =[
 
  {path : 'product',  component : ProductsComponent  },
  {path :'abt_us' , component : AboutUsComponent},
  {path : 'p_details/:productID',  component : ProductDetailComponent  },
  
];
@NgModule({
  declarations: [ProductsComponent,AboutUsComponent,ProductDetailComponent],
  imports: [
    CommonModule,RouterModule
  ] , exports : [ProductsComponent, AboutUsComponent,ProductDetailComponent]
})
export class RouterModModule { }
