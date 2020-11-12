import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.css']
})
export class CategoryContainerComponent implements OnInit {

  startDate = new Date(2020, 6, 5);
  futureDate = new Date(2020, 6, 6);

  constructor() { }

  ngOnInit() {
    console.log(this.startDate);
  }

}
