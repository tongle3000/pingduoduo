import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';


export interface Channel {
  id: number;
  title: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HorizontalGridComponent implements OnInit {

  @Input() cols = 8;
  @Input() displayCols = 5;
  sliderMargin = '0';
  @Input() underlineWidth = '4rem'; // 滚动条背景初始化长度

  channels: Channel[] = [
    {
      id: 1,
      title: '限时秒杀',
      icon: 'https://static.easyicon.net/preview/119/1197675.gif',
      link: ''
    },
    {
      id: 2,
      title: '限时秒杀',
      icon: 'https://static.easyicon.net/preview/119/1197675.gif',
      link: ''
    },
    {
      id: 3,
      title: '限时秒杀',
      icon: 'https://static.easyicon.net/preview/119/1197675.gif',
      link: ''
    },
    {
      id: 4,
      title: '限时秒杀',
      icon: 'https://static.easyicon.net/preview/119/1197675.gif',
      link: ''
    },
    {
      id: 5,
      title: '限时秒杀',
      icon: 'https://static.easyicon.net/preview/119/1197675.gif',
      link: ''
    },
    {
      id: 6,
      title: '限时秒杀',
      icon: 'https://static.easyicon.net/preview/119/1197675.gif',
      link: ''
    },
    {
      id: 7,
      title: '限时秒杀',
      icon: 'https://static.easyicon.net/preview/119/1197675.gif',
      link: ''
    },
    {
      id: 8,
      title: '限时秒杀',
      icon: 'https://static.easyicon.net/preview/119/1197675.gif',
      link: ''
    }
  ];
  constructor() { }

  ngOnInit() { }

  /**
   * scrollable 出现滚动条
   */
  public get scrollable(): boolean {
    return this.cols > this.displayCols;
  }

  /**
   * templateRows
   */
  public get templateRows(): string {
    return `minmax(auto, max-content)`;
  }
  /**
   * 100vw 可见的屏幕宽度
   * this.displayCols 可视的列数(-1) * 0.4(间隔) 除 可视范围的列数 this.displayCols
   * 0.6 是左右的 margin 边距.
   */
  public get templateColumns(): string {
    return `repeat(${this.cols}, calc((100vw - ${(this.displayCols - 1) * 0.4 + 0.6 * 2}rem) / ${this.displayCols}) )`;
  }


  /**
   * sliderWidth
   * 计算拖动 滚动条的长度
   */
  public get sliderWidth() {
    return `${(this.displayCols / this.cols) * parseInt(this.underlineWidth, 10)}rem`;
  }


  /**
   * Handles scroll
   * 拖动时,下面显示的水平的线长度
   */
  handleScroll(ev) {
    this.sliderMargin = `0 ${100 * ev.target.scrollLeft / ev.target.scrollWidth}% `;
  }

}
