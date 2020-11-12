import { Component, OnInit, NgZone, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _title: string;
  // tslint:disable-next-line:variable-name
  _time;
  @ViewChild('timeRef', { static: true }) timeRef: ElementRef;
  /**
   * get title
   *
   */

  public get title(): string {
    // console.log('脏值检测ASDF title');
    return this._title;
  }

  /**
   * get time
   */
  public get time(): number {
    // console.log('脏值检测ASDF time');
    return this._time;
  }

  // // 下面 3 个函数, 运行后报错
  // constructor() {
  //   this._title = 'hi';
  // }

  // ngOnInit() {
  // }
  // ngAfterViewChecked(): void {
  //   this._title = '您好'; // 异常: 最后执行这里,发现_title 有变,又执行上面的函数,死循环.
  //   // ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.
  //   // Previous value for 'textContent': 'hi'. Current value: '您好'.
  // }

  // 下面 3 个函数, 运行后报错
  constructor(private ngZone: NgZone, private rd: Renderer2) {
    this._title = 'hi';
  }
  ngOnInit() {
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewChecked(): void {
    // this._title = '您好'; // 异常: 最后执行这里,发现_title 有变,又执行上面的函数,死循环.
    this.ngZone.runOutsideAngular(() => {
      // this._title = '你好'; // 报错: 不能用这句,要用异步操作 setInterval
      setInterval(() => {
        this._title = '您好'; // 这样不会报错了;
        this._time = Date.now();

        // 绑定本身事件好事,但是 如果绑定要不断的脏值检测, 损耗性能,这时还是用这个操作 DOM避免它.
        // this.timeRef.nativeElement.innerText = Date.now(); // 这样操作 DOM ,不会引发脏值检测

        // 上面这句是直接操作 DOM,可以改成 renderer2 的 setProperty() 方法, 操作.符合 angular 的推荐形式;
        // this.rd.setProperty(this.timeRef.nativeElement, 'innerText', Date.now());

        // Date.now() 可以改成 日期的管道 formatDate(); 在类中使用管道;
        this.rd.setProperty(this.timeRef.nativeElement, 'innerText', formatDate(Date.now(), 'HH:mm:ss:S', 'zh-Hans'));

      }, 100);
    });
    console.log(this.ngZone.runOutsideAngular);
  }

  handleClick() { }

}
