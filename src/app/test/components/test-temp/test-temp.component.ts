import { Component, OnInit } from '@angular/core';

import { Emoji, Confirmable } from '../../../shared/decorator';

@Component({
  selector: 'app-test-temp',
  templateUrl: './test-temp.component.html',
  styleUrls: ['./test-temp.component.css']
})
export class TestTempComponent implements OnInit {



  // 4-1 装饰器(注解) 001   decorator/index.ts
  @Emoji() result = 'Hello';

  username = '';


  constructor() { }

  ngOnInit() {
  }

  // 4-1 装饰器(注解) 002   decorator/index.ts
  @Confirmable('你确认要执行吗?')
  handleClick() {
    console.log('点击已执行');
  }


}
