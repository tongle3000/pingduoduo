import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  startDate = new Date(2020, 6, 1);
  futureDate = new Date(2020, 6, 3);
  constructor() { }

  ngOnInit() {
  }

}
