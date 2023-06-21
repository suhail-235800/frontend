import { Component } from '@angular/core';

@Component({
  selector: 'app-ratingdialog',
  templateUrl: './ratingdialog.component.html',
  styleUrls: ['./ratingdialog.component.css']
})
export class RatingdialogComponent {
  showDialog: boolean = false;

  openDialog() {
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }
}

