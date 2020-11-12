##  rxjs 精彩之处在于他可以拥有强大的 操作符
    /**
    * 这块使用 rxjs 的操作符 改掉.
    */
    // selectedTabLink;
    selectedTabLink$: Observable<string>; // $是个流. 也可以不加

    // channels: Channel[] = [];
    // imagesSliders: ImagesSlider[] = [];
    imagesSliders$: Observable<ImagesSlider[]>;
    channels$: Observable<Channel[]>;

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

        // 这个是没有用 rxjs 流处理的,我们流个例子. 然后我们要把这个内存清理掉. 在 ngOnDestroy()里
        this.sub = this.route.queryParamMap.subscribe(params => {
        console.log('查询参数: ', params);
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

#   home-detiail.html
<div *ngIf="(selectedTabLink$ | async) === 'hot' else other">

  <app-images-slider [sliders]="imagesSliders$ | async"></app-images-slider>

  <app-horizontal-grid underlineWidth="4rem">
    <div appGridItem *ngFor="let item of channels$ | async">
      <img [src]="item.icon" alt="" [appGridItemIcon]="'2rem'" />
      <span [appGridItemTitle]="'0.5rem'">{{ item.title }}</span>
    </div>
  </app-horizontal-grid>

</div>

<ng-template #other>
  Other Works!
</ng-template>

##  home.services.ts  return 后加 of 方法,转换成流   这样上面可以 用  rxjs async管道 处理.
    getChannels() {
            return of(this.channels);
        }
        getBanners() {
            return of(this.imagesSliders);
        }