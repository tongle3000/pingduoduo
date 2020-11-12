// ng-dir
import { Directive, OnInit, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[appGridItemIcon]', // 'appGridItem' 得加个中括号.
})
export class GridItemIconDirective implements OnInit {

    @Input() appGridItemIcon = '2rem'; // 可在html页面里设置其他值
    @Input() objectFitMode = 'cover'; // 可在html页面里设置其他值

    /**
     * 这个不改为 @HostBinding, 保留 最初写法
     */
    constructor(private elr: ElementRef, private rd2: Renderer2) { // 写文档结构,推荐用 renderer2

    }

    ngOnInit(): void {
        this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'icon');
        this.rd2.setStyle(this.elr.nativeElement, 'width', this.appGridItemIcon);
        this.rd2.setStyle(this.elr.nativeElement, 'height', this.appGridItemIcon);
        this.rd2.setStyle(this.elr.nativeElement, 'object-fit', this.objectFitMode);
    }

    // 4-4 指令事件绑定
    @HostListener('click', ['$event.target'])
    handleClick(ev) {
        console.log(ev);
    }


}
