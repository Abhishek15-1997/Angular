import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModModule, RoutesTable } from './router-mod/router-mod.module';
import { RouterModule } from '@angular/router';
import { NavCompComponent } from './nav-comp/nav-comp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
   
    NavCompComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModModule,
    RouterModule.forRoot(RoutesTable)
    
  ],
  providers: [],
  bootstrap: [NavCompComponent]
})
export class AppModule { }
