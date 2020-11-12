// ng-dir
import { Directive, /*OnInit, ElementRef, Renderer2,*/ HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appGridItemTitle]', // 'appGridItem' 得加个中括号.
})
export class GridItemTitleDirective /*implements OnInit*/ {

    // 4-4 指令样式定义
    @HostBinding('style.grid-area') area = 'title';
    @HostBinding('style.font-size') @Input() appGridItemTitle = '0.5rem';

    /**
     * // 4-4 指令样式定义
     * 改成 上面的 @HostBinding
     */
    // constructor(private elr: ElementRef, private rd2: Renderer2) { // 写文档结构,推荐用 renderer2
    // }
    // ngOnInit(): void {
    //     this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'title');
    // }
}
