import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {

  // 4-12 管道
  // 先建立一个对象
  obj = { productId: 2, productName: 'xx手机', model: 's', type: '全面屏' };
  date: Date;
  price: number;
  price2: number;
  data: [1, 2, 3, 4, 5];

  // 4-12 自定义管道 appAgo
  date2: Date;

  constructor() { }

  ngOnInit() {
    this.date = new Date();
    this.price = 123.12345;
    this.price2 = 123.1;

    // 4-12 自定义管道 appAgo
    this.date2 = this.minusDays(new Date(), 1);

  }

  // 4-12 自定义管道 appAgo 把事件减几天.
  minusDays(date2: Date, days: number) {
    const result = new Date(date2);
    result.setDate(result.getDate() - days);
    return result;
  }

}
