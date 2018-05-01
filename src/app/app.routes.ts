import { HomeComponent } from "./home/home.component"
import {AboutComponent} from "./about/about.component"
import { Routes } from "@angular/router";
import { RestaurantsComponent } from "app/restaurants/restaurants.component";
import { RestaurantsDetailsComponent } from "app/restaurants-details/restaurants-details.component";
import { MenuComponent } from "app/restaurants-details/menu/menu.component";
import { ReviewsComponent } from "app/restaurants-details/reviews/reviews.component";

export const ROUTES : Routes =[
  {path:'', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path: 'restaurants/:id', component:RestaurantsDetailsComponent,
  children:[
    {path: '', redirectTo:'menu', pathMatch:'full'},
    {path: 'menu', component:MenuComponent},
    {path: 'reviews', component:ReviewsComponent}
  ]},
  {path:'restaurants',component:RestaurantsComponent}

]
