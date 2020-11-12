import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {


  @Input() @HostBinding('style.background-color') btnBgColor = '#e02f29';
  @Input() @HostBinding('style.color') btnColor = '#fff';
  @Input() @HostBinding('style.font-size') btnSize = '0.8rem';
  @Input() @HostBinding('style.padding') btnPadding = '3px';
  @Input() @HostBinding('style.border-radius') btnRadius = '0';
  @Input() @HostBinding('style.height') btnHeight = '2rem';
  @Input() @HostBinding('style.line-height') btnLineHeight = '2rem';

  constructor() { }

}
