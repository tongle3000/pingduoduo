import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad, Product } from 'src/app/shared/components';
import { HomeService } from '../../../home/services';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-recommend-container',
  templateUrl: './recommend-container.component.html',
  styleUrls: ['./recommend-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendContainerComponent implements OnInit {


  ad$: Observable<Ad>; // 6-4 5 rxjs 广告为
  products$: Observable<Product[]>; // 6-5 ④ 6-5 创建垂直网格组件
  constructor(private service: HomeService) { }

  ngOnInit() {

    // 6-4 6 rxjs 广告为
    // this.ad$ = this.service.getAdByTab(tab);
    // 流中有流。
    this.ad$ = this.service.getAdByTab('men').pipe( // 返回个getAdByTab(tab)的流,这个流可以重复用。 用subscript 流，不能重用。
      // 写到上面这句，会报"不能将类型“Observable<Ad[]>”分配给类型“Observable<Ad>”。 所以还用filter
      filter(ads => ads.length > 0),
      map(ads => ads[0]) // 这里简单处理，直接分配ads[0]第一张图片，本来是根据不同的tab频道，加载不同的广告图片。
    );


    // 6-5 ⑤ 6-5 创建垂直网格组件
    this.products$ = this.service.getProductByTab('men'); // 返回个getAdByTab(tab)的流,这个流可以重复用。 用subscript 流，不能重用。

  }

}
