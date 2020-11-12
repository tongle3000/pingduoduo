// #### 6-6 6-7 产品组件卡片 标签的指令
// 纯 CSS 做成一个 指令 有点小题大做. 主要是为了以后的可扩展性.
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appTag]'
})
export class TagDirective {

  @Input() @HostBinding('style.background-color') tagBgColor = '#faefe3';
  @Input() @HostBinding('style.color') tagColor = '#ca516a';
  @Input() @HostBinding('style.font-size') tagSize = '0.8rem';
  @Input() @HostBinding('style.padding') tagPadding = '1px 3px';
  @Input() @HostBinding('style.border-radius') tagRadius = '0';

  constructor() { }

}
