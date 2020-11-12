// ng-dir 模板
import { Directive, HostBinding /*, OnInit, ElementRef, Renderer2*/ } from '@angular/core';

@Directive({
    selector: '[appGridItem]', // 'appGridItem' 得加个中括号.
})
export class GridItemDirective /* implements OnInit*/ {

    // 4-4 指令样式定义
    @HostBinding('style.display') display = 'grid';
    @HostBinding('style.grid-template-areas') template = `'icon' 'title'`;
    @HostBinding('style.place-items') align = 'center';
    @HostBinding('style.width') width = 'auto';

    /**
     * 改成 上面的 @HostBinding
     */
    // constructor(private elr: ElementRef, private rd2: Renderer2) { // 写文档结构,推荐用 renderer2
    // }
    // ngOnInit(): void {
    //     // this.rd2.setStyle(this.elr.nativeElement, 'display', 'grid');
    //     // this.rd2.setStyle(this.elr.nativeElement, 'grid-template-areas', `'icon' 'title'`);
    //     // this.rd2.setStyle(this.elr.nativeElement, 'place-items', 'center');
    //     // this.rd2.setStyle(this.elr.nativeElement, 'width', '4rem');
    // }

}
