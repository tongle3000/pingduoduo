import {
  Component,
  OnInit, Input,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  Renderer2
} from '@angular/core';


export interface ImagesSlider {
  imgUrl: string;
  link: string;
  caption: string; // 标题
}

@Component({
  selector: 'app-images-slider',
  templateUrl: './images-slider.component.html',
  styleUrls: ['./images-slider.component.css']
})
export class ImagesSliderComponent implements OnInit {

  @Input() sliders: ImagesSlider[] = [];
  // 3-5
  @Input() sliderHeight = '160px'; // html 直接用 style 引用



  @ViewChild('imagesSlider', { static: true }) imagesSliderRef: ElementRef;
  // @ViewChildren('img') imgs: QueryList<ElementRef>; // 3-4 泛型
  constructor(private rd2: Renderer2) { }

  ngOnInit() {
    // console.log('ngOnInit', this.imagesSliderRef);
    // this.imagesSliderRef.nativeElement.innerHTML = `<span>Hello</span>`; // 这句是把图片地址改成了 <span>Hello</span>
  }

  // 3-4
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
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



}
