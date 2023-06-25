import { Component } from '@angular/core';

@Component({
  selector: 'app-ratereviw',
  templateUrl: './ratereviw.component.html',
  styleUrls: ['./ratereviw.component.css']
})
export class RatereviwComponent {
  selectedRating: number | null = null;

  onRatingChange(rating: number) {
    console.log(rating); // This will output the selected rating as a number
  }
}
