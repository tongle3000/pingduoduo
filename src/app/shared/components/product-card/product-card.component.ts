import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../domain/index';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  @Input() isBottom: boolean;
  constructor() { }

  ngOnInit() {

  }

}
