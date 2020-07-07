import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// routers
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DatabindComponent } from './databind/databind.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//ngx bootstrap
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
 import { from } from 'rxjs';
 import { CollapseModule } from 'ngx-bootstrap/collapse';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { ContactComponent } from './routing/contact/contact.component';
import { ProductsComponent } from './routing/products/products.component';
import { Route } from '@angular/compiler/src/core';
import { RoutingComponent } from './routing/routing.component';
import { LaptopComponent } from './routing/products/laptop/laptop.component';
import { MobileComponent } from './routing/products/mobile/mobile.component';
import { TvComponent } from './routing/products/tv/tv.component';
import { CameraComponent } from './routing/products/camera/camera.component';
import { CardComponent } from './routing/card/card.component';
import { BuyproductsComponent } from './routing/buyproducts/buyproducts.component';
import { ChildComponent } from './routing/child/child.component';
import { CodeserviceService } from './routing/codeservice.service';
import { Excercise1Component } from './app/Excercise/excercise1/excercise1.component';
import { ParentchildComponent } from './app/Excercise/parentchild/parentchild.component';
import { CustomerComponent } from './app/Excercise/excercise2/customer/customer.component';

// rounting paths and components
const appRoutes:Routes=[
  // for redirect to any component
  // {path:'',redirectTo:'login',pathMatch:'full'}
  // for default routing page we have to empty path of home 
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  
  {path:'buy products',component:BuyproductsComponent},
  {path:'contact',component:ContactComponent},
  {path:'products',children:[
    {path:'',component:ProductsComponent},
    {path:'laptop',component:LaptopComponent},
    {path:'mobile',component:MobileComponent},
    {path:'tv',component:TvComponent},
    {path:'camera',component:CameraComponent}
// wildcard
  // {path:'**', component:pagenotfoundComponent}
  
  ]  }
  
  
]
@NgModule({
  declarations: [
    AppComponent,
    DatabindComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    RoutingComponent,
    LaptopComponent,
    CardComponent,
    BuyproductsComponent,
    ChildComponent,
    Excercise1Component,
    ParentchildComponent,
    CustomerComponent,
    // MobileComponent,TvComponent,CameraComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    // NgbAlertModule,
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    
    
  ],
  providers: [CodeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
