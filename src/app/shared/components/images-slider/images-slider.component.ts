
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  Renderer2,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';


export interface ImagesSlider {
  id: number;
  imgUrl: string;
  link: string;
  caption: string; // 标题
  productVariantId: number;
}

@Component({
  selector: 'app-images-slider',
  templateUrl: './images-slider.component.html',
  styleUrls: ['./images-slider.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagesSliderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() sliders: ImagesSlider[] = [];
  // 3-5
  @Input() sliderHeight = '160px'; // html 直接用 style 引用
  @Input() intervalBySec = 2;

  selectedIndex = 0;
  intervalId;

  @ViewChild('imagesSlider') imgSlider: ElementRef;
  // @ViewChild('imagesSlider', { static: true }) imagesSliderRef: ElementRef;
  // @ViewChildren('img') imgs: QueryList<ElementRef>; // 3-4 泛型
  constructor(private rd2: Renderer2) { }

  ngOnInit() {
    // console.log('ngOnInit', this.imagesSliderRef);
    // this.imagesSliderRef.nativeElement.innerHTML = `<span>Hello</span>`; // 这句是把图片地址改成了 <span>Hello</span>
  }

  // 3-4
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {


    // 7-2 产品 详情页 画廊
    if (this.intervalBySec <= 0) {
      return; // 如果设置了这个时间是 0, 则这个轮播图不自动播放.
    }


    // console.log(this.imgSlider);
    /**
     * 3-5 Element.scrollLeft
     */
    // let i = 0;
    // 001 存在问题: 到了最后一张不动了
    // setInterval(() => {
    //   this.rd2.setProperty(this.imgSlider.nativeElement, 'scrollLeft',
    //     (++i * this.imgSlider.nativeElement.scrollWidth / this.sliders.length)
    //     //                         1                    /         5
    //   );  // 这个是 HTML 的一个属性.
    // }, this.intervalBySec * 1000);

    // 002 存在问题: 往回滑动图片,会直接跳到 后面第三张图片. 应该是跳到第二张的. 这里要增加 scroll 事件了.
    // 每隔 2 秒加 1, 1/5, 后面 2 秒后 2/5. 现在是每隔 2 秒变一张,到了最后一张不动了,
    // 这时 i 得取长度的余数.去变动 (++i % this.sliders.length),这时就轮播了.
    // setInterval(() => {
    //   this.rd2.setProperty(this.imgSlider.nativeElement, 'scrollLeft',
    //     ((++i % this.sliders.length) * this.imgSlider.nativeElement.scrollWidth / this.sliders.length)
    //     //                         1                    /         5
    //   );  // 这个是 HTML 的一个属性.
    // }, this.intervalBySec * 1000);

    // 003 (scroll)="handleScroll($event)"
    // <div class="images-slider" (scroll)="handleScroll($event)" #imagesSlider>
    // 这个事件 其实 html 的一个事件反应
    // 002中的 i 就可以去掉了,改为 ++this.selectedIndex
    // setInterval(() => {
    //   this.rd2.setProperty(this.imgSlider.nativeElement, 'scrollLeft',
    //     // ((++this.selectedIndex % this.sliders.length) * this.imgSlider.nativeElement.scrollWidth / this.sliders.length)
    //     (this.getIndex(++this.selectedIndex) * this.imgSlider.nativeElement.scrollWidth /
    //       this.sliders.length)
    //   );  // 这个是 HTML 的一个属性.
    // }, this.intervalBySec * 1000);

    // 004 还有个内存泄漏问题.setInterval 和 settimeout
    // 要清理掉 上面申明个 intervalId;
    // 再到 下面 ngOnDestroy() 生命周期函数里去清理到 setInterval()
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(this.imgSlider.nativeElement, 'scrollLeft',
        // ((++this.selectedIndex % this.sliders.length) * this.imgSlider.nativeElement.scrollWidth / this.sliders.length)
        (this.getIndex(++this.selectedIndex) * this.imgSlider.nativeElement.scrollWidth /
          this.sliders.length)
      );  // 这个是 HTML 的一个属性.
    }, this.intervalBySec * 1000);



    // console.log('ngAfterViewInit', this.imgs);

    // 下面这句  直接操作 DOM节点, 很容易注入攻击. 如果下面的代码 允许用户可编辑的HTML 代码 的话,恶意注入些攻击代码,就会.
    // this.imgs.forEach(item => item.nativeElement.style.height = '100px');

    // 改成: constructor 构造函数里 声明下 private rd2:Renderer2
    // 为什么要改成这样的呢???
    // 上面的会引起一些 注入攻击.
    // this.imgs.forEach(item => {
    //   this.rd2.setStyle(item.nativeElement, 'height', '100px');
    // });
  }

  // 004 还有个内存泄漏问题.setInterval 和 settimeout
  // 要清理掉 上面申明个 intervalId;
  // 在这个生命周期函数里,我们经常做一些收尾工作.清理一些内存泄漏的.
  ngOnDestroy(): void {
    clearInterval(this.intervalId); // 再这里清理掉 setInterval()
  }

  // 003 (scroll)="handleScroll($event)"
  // ++this.selectedIndex 每次这样加,会越界.得加个方法处理下;
  getIndex(idx: number): number {
    // console.log(idx)
    return idx >= 0 ? idx % this.sliders.length : (this.sliders.length - Math.abs(idx) % this.sliders.length); // 绝对值 Math.abs(idx)
  }

  handleScroll(ev) {

    const ratio = ev.target.scrollLeft * this.sliders.length / ev.target.scrollWidth;
    // console.log(Math.round(ratio));
    this.selectedIndex = Math.round(ratio);
  }
  // 显示当前图的小圆点 [ngClass]="{'slide-button-select': idx===selectedIndex





}
