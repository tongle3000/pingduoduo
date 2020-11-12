import { Component, OnInit, Input } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})



export class CountDownComponent implements OnInit {

  @Input() startDate = new Date(); // 获取系统当前时间.
  @Input() futureDate = new Date(); // Date型
  private _MS_PER_SECOND = 1000; // 秒

  countDown$: Observable<string>;

  constructor() { }

  ngOnInit() {
    // 怎么计算流逝的时间, interval 它就是.
    // this.countDown$  = interval(1000).pipe(); // interval(1000).pipe(); 这个是 number 型.
    // this.countDown$ = interval(1000).pipe(map(elapse => `${elapse}`)); // 转换成字符型. 得到是的从 0 开始计时下去.

    this.countDown$ = interval(1000).pipe(
      map(elapse => this.diffInSec(this.startDate, this.futureDate) - elapse),
      // 差值大于等于 0 执行. 小于 0 退出.
      takeWhile(gap => gap >= 0),
      // 把秒转换成 小时 分 秒
      map(sec => ({
        // day: Math.floor(sec / 3600 / 24), // 一般不用天
        // hour: Math.floor(sec / 3600 % 24), // 一般不用天,这句得改为下面的
        hour: Math.floor((sec - 1) / 3600), // 都减 1,是为了不让从 0 开始,都是从 59 开始
        minute: Math.floor((sec - 1) / 60 % 60),
        second: Math.floor((sec - 1) % 60)
      })),
      // map(date => `${date.hour}:${date.minute}:${date.minute}:${date.second}`)
      // 还可以这样写: 只需要这三个值 hour, minute, second
      map(({ hour, minute, second }) => `${hour}:${minute}:${second}`)

    );
    console.log('aaa');

  }

  // 写个函数,得到 futureDate 与 startDate 的时间差. 这个时间差,返回的是以秒为单位的数字.
  private diffInSec = (start: Date, future: Date) => {
    const diff = future.getTime() - start.getTime(); // 这里得到的是毫秒.要转换成秒.
    return Math.floor(diff / this._MS_PER_SECOND); // 转换成秒. 用总的除以 1000, 这个 1000 是个常量,我们可以定义名字_MS_PER_SECOND.
  }


}

