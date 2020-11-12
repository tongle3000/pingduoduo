import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Channel, ImagesSlider, Ad, Product } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { filter, map, switchMap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit, OnDestroy {


  // 3-4 模板在组件中的引用.
  // @ViewChild('imagesSlider') imgsSlider: ImagesSliderComponent;
  // 推荐使用 renderer2 操作 imagesSlider 的 DOM
  // 如果不取别名, 直接引入 ImagesSliderComponent 组件名.
  // @ViewChild('ImagesSliderComponent') imgsSlider: ImagesSliderComponent;
  // 对应 html 文件<app-images-slider [sliders]="imagesSliders" #imagesSlider>
  // 应该把 #imagesSlider 去掉'<app-images-slider [sliders]="imagesSliders">' 即可.


  constructor(private route: ActivatedRoute, private service: HomeService, private cd: ChangeDetectorRef) { }

  /**
   * 这块使用 rxjs 的操作符 改掉.
   */
  // selectedTabLink;
  selectedTabLink$: Observable<string>; // $是个流. 也可以不加

  // channels: Channel[] = [];
  // imagesSliders: ImagesSlider[] = [];
  imagesSliders$: Observable<ImagesSlider[]>;
  channels$: Observable<Channel[]>;

  ad$: Observable<Ad>; // 6-4 5 rxjs 广告为

  products$: Observable<Product[]>; // 6-5 ④ 6-5 创建垂直网格组件

  sub: Subscription;

  ngOnInit() {

    /**
     * 这块使用 rxjs 的操作符 改掉.
     */
    // this.route.paramMap.subscribe(params => {
    //   console.log('路径参数:', params);
    //   this.selectedTabLink = params.get('tabLink');
    //   this.cd.markForCheck(); // 这句什么意思,详见下面注释②
    //   // console.log(params.get('tabLink'));
    // });
    this.selectedTabLink$ = this.route.paramMap
      .pipe( // pipe 管道
        filter(params => params.has('tabLink')), // 操作符filter,我堵住一些东西,放行一些东西.
        map(params => params.get('tabLink')) // 操作符map, 把流转换成不同形状.
      );
    // .subscribe(tabLink => { // selectedTabLink$: Observable<string>; 上面这样定义了, 这一块代码就可以不要了. 但是前面要加 this.selectedTabLink$ =
    //   console.log('路径参数: ', tabLink);
    //   this.selectedTabLink = tabLink;
    //   this.cd.markForCheck();
    // });

    this.imagesSliders$ = this.service.getBanners();
    this.channels$ = this.service.getChannels();

    // 6-4 6 rxjs 广告为
    // this.ad$ = this.service.getAdByTab(tab);
    // 流中有流。
    this.ad$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.service.getAdByTab(tab)), // 返回个getAdByTab(tab)的流,这个流可以重复用。 用subscript 流，不能重用。
      // 写到上面这句，会报"不能将类型“Observable<Ad[]>”分配给类型“Observable<Ad>”。 所以还用filter
      filter(ads => ads.length > 0),
      map(ads => ads[0]) // 这里简单处理，直接分配ads[0]第一张图片，本来是根据不同的tab频道，加载不同的广告图片。
    );


    // 6-5 ⑤ 6-5 创建垂直网格组件
    this.products$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.service.getProductByTab(tab)) // 返回个getAdByTab(tab)的流,这个流可以重复用。 用subscript 流，不能重用。
    );

    // console.log(this.products$, '00000000000000', this.selectedTabLink$.pipe(
    //   switchMap(tab => this.service.getProductByTab(tab)) // 返回个getAdByTab(tab)的流,这个流可以重复用。 用subscript 流，不能重用。
    // ));

    // 这个是没有用 rxjs 流处理的,我们流个例子. 然后我们要把这个内存清理掉. 在 ngOnDestroy()里
    this.sub = this.route.queryParamMap.subscribe(params => {
      console.log('查询参数: ', params);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  // 3-4
  // tslint:disable-next-line:use-lifecycle-interface
  // ngAfterViewInit(): void {
  //   // console.log('imagesSlider: ', this.imgsSlider); // 打印出 sliders: imagesSliderRef、imgs、rd2、sliders.
  // }

}

/**
 * 注释②
 *  如果想改变 home-detail.component (告诉他我这里发生变化了,请来检测下. private cd:ChangeDetectorRef this.cd.markForCheck();)
 *  加入changeDetection: ChangeDetectionStrantegy.OnPush后, 切换到其他 tab 页 再切换到首页 热门 会有问题. 路由会回不来.
 *  这时 我们需要 在 constructor 里引入 ChangeDetectorRef
 *  constructor(private cd:ChangeDetectorRef)
 *
 *  再到这句的下面加入, 一句代码, 让他自动脏值检测,告诉他我这里发生变化了,请来检测下.
 *  this.selectedTabLink = params.get('tabLink');
 *  this.cd.markForCheck();
 */


/**
 * 未使用 rxjs 之前的代码
 */
//  selectedTabLink;
// channels: Channel[] = [];
// imagesSliders: ImagesSlider[] = [];
//  ngOnInit() {

  // this.route.paramMap.subscribe(params => {
  //   console.log('路径参数:', params);
  //   this.selectedTabLink = params.get('tabLink');
  //   this.cd.markForCheck(); // 这句什么意思,详见下面注释②
  //   // console.log(params.get('tabLink'));
  // });

  // this.route.queryParamMap.subscribe(params => {
  //   console.log('查询参数: ', params);
  // });

  // this.imagesSliders = this.service.getBanners();
  // this.channels = this.service.getChannels();
// }
