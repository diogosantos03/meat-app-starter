import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../../restaurants/restaurants.service'
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restauranteService: RestaurantsService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restauranteService.reviewsOfFestaurants(this.route.parent.snapshot.params['id'])
  }

}
