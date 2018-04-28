import { HomeComponent } from "./home/home.component"
import {AboutComponent} from "./about/about.component"
import { Routes } from "@angular/router";
import { RestaurantsComponent } from "app/restaurants/restaurants.component";
import { RestaurantsDetailsComponent } from "app/restaurants-details/restaurants-details.component";

export const ROUTES : Routes =[
  {path:'', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path: 'restaurants/:id', component:RestaurantsDetailsComponent},
  {path:'restaurants',component:RestaurantsComponent}

]
