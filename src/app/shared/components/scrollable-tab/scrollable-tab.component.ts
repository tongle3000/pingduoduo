import {
  Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges,
  AfterContentInit, OnDestroy, ChangeDetectionStrategy
} from '@angular/core';


export interface TopMenu {
  id: number;
  title: string;
  link: string;
}


@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollableTabComponent implements OnInit/*, OnChanges, AfterContentInit, OnDestroy*/ {

  // 6-3 解决刷新后，顶部的按钮没由显示当前的问题。
  // 这个 删掉
  // selectedIndex = 0; // 默̥认̥第̥一̥个̥设̥置̥成̥红̥色̥

  @Input() selectedTabLink: string; // 6-3 解决刷新后，顶部的按钮没由显示当前的问题。
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = '#fff';
  @Input() indicatorColor = 'red';
  @Input() titleActiveColor = 'red';
  @Input() titleColor = '#666';
  @Output() menuSelected = new EventEmitter(); // EventEmitter 事̥件̥发̥射̥器̥.

  /**
   * 构造函数永远首先被调用
   */
  constructor() {
    // console.log('组件构造函数');
  }

  /**
   * 组件初始化完成,在这个函数中,我们可以安全的使用
   */
  ngOnInit(): void {
    // console.log('组件初始化.');
    // console.log(this.menus[1].link, 'a---------a', this.selectedTabLink);

  }

  handleSelected(i: number) {
    // 6-3 解决刷新后，顶部的按钮没由显示当前的问题。
    // 这个 删掉
    // this.selectedIndex = i;

    // this.menuSelected.emit(this.menus[this.selectedIndex]); // 父组件中调用子组件时绑定事件，在子组件中使用$emit方法调用该事件并传参
    //                 携̥带̥       菜̥单̥       选̥中̥的̥.

    this.menuSelected.emit(this.menus[i]); // 6-3 解决刷新后，顶部的按钮没由显示当前的问题。
  }

}



/**
 * 在组件的'@Input'属性发生变化的时候调用
 * param    changes 索引对象 key 是属性的名字,value 是 SimpleChanges
 */
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('组件输入属性改变', changes);
  // }
/**
 * 组件内容初始化
 */
  // ngAfterContentInit(): void {
  //   console.log('组件内容初始化');
  // }

/**
 * 需要做一些清理工作
 * settime settimeout 要清理掉,不然会内存泄漏.
 */
  // ngOnDestroy(): void {
  //   console.log('组件销毁');
  // }


  // ngDoCheck(): void {
  //   console.log('组件脏值检测');
  // }
