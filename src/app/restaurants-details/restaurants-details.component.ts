import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../restaurants/restaurants.service';
import { Restaurant } from "app/restaurants/restaurant/restaurant.model";
import {ActivatedRoute}  from "@angular/router";

@Component({
  selector: 'mt-restaurants-details',
  templateUrl: './restaurants-details.component.html'
})
export class RestaurantsDetailsComponent implements OnInit {

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  restaurant: Restaurant

  ngOnInit() {
    this.restaurantsService.restauranteById(this.route.snapshot.params['id'])
      .subscribe(restaurant=>this.restaurant = restaurant)
  }

}
