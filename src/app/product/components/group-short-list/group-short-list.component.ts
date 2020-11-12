import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { GroupOrder } from '../../domain/index';

@Component({
  selector: 'app-group-short-list',
  templateUrl: './group-short-list.component.html',
  styleUrls: ['./group-short-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupShortListComponent implements OnInit {

  @Input() groupOrders: GroupOrder[] = [];
  @Input() row = 2; // 默认显示 2 行. 设置成输入属性,后面要显示多少行,自己定义.

  constructor() { }

  ngOnInit() {
    // 数据可以从服务器端读取. 这里就直接定义到下面
    this.groupOrders = [
      {
        id: 1,
        productId: 2,
        startBy: '刘德华',
        avatar: 'https://upload-images.jianshu.io/upload_images/16623634-dd2b82b615b125ae?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        startAt: new Date(),
        remainingNumber: 2
      },
      {
        id: 2,
        productId: 2,
        startBy: '范冰冰',
        avatar: 'https://upload-images.jianshu.io/upload_images/16623634-dd2b82b615b125ae?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        startAt: new Date(2020, 6, 7),
        remainingNumber: 2
      }
    ];
  }

}
