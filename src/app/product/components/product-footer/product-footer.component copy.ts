import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { ProductFooterBtn, ProductVariant } from '../../domain';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services';
import { DialogService } from 'src/app/dialog';
import { ProductVariantDialogComponent } from '../product-variant-dialog';

@Component({
  selector: 'app-product-footer',
  templateUrl: './product-footer.component.html',
  styleUrls: ['./product-footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductFooterComponent implements OnInit {



  @Input() productFooterBtns: ProductFooterBtn[] = [];
  buyProductPrice$: Observable<ProductVariant[]>;
  selectedIndex = 0;

  constructor(
    private router: Router, // 结合 EventEmiteer 可以把数据传到其他指定的路由里. this.router.navigate(['/order/confirm'])
    private route: ActivatedRoute,
    private service: OrderService,
    private dialogService: DialogService // 7-7 弹窗 实战对话框
  ) { }

  ngOnInit() {
    this.productFooterBtns = [
      {
        icon: './assets/icons/more.svg',
        title: '更多'
      },
      {
        icon: './assets/icons/favorites.svg',
        title: '收藏'
      },
      {
        icon: './assets/icons/service.svg',
        title: '客服'
      }
    ];

    const productId$ = this.route.paramMap.pipe(
      filter(params => params.has('productId')),
      map(params => params.get('productId'))
    );

    this.buyProductPrice$ = productId$.pipe(
      switchMap(productId =>
        this.service.getProductVariantsByProductId(productId)
      )
    );
  }


  // 直接购买
  handleDirectBuy(variants: ProductVariant[]) { }

  // 拼单购买 // 7-7 弹窗 实战对话框
  // 加上 InputS outputs 值 从 product-variant-dialog.component.ts 文件取过来,因为这边定义了这些属性.
  handleGroupBuy(variants: ProductVariant[]) {
    const top = 40;

    // Outputs 复杂点,还要定义这块
    // Subject 即是 Observable 也是一个 Observer
    // Subject 可以是 next(xxx) 也可以 subscribe
    // Behavior Subject 是 Subject当中的一种特殊形式.可以记住最新的一个值.
    // 下面这些写法,以后都尽量用框架去做的. 而不用这里的这些
    const fromSubmitted = new EventEmitter(); // EventEmitter 其实也是个 rxjx 流.
    fromSubmitted.subscribe(ev => {
      console.log('fromSubmitted: ', ev);
      this.dialogService.saveData(ev);
      this.router.navigate(['/order/confirm']); // 传到这个路由
    });
    const selected = new EventEmitter();
    selected.subscribe(ev => {
      console.log('selected: ', ev);
      this.selectedIndex = ev;
    });


    this.dialogService.open(ProductVariantDialogComponent, {
      inputs: {
        variants, // 从 product-variant-dialog.component.ts 文件取过来
        selectedVariantIndex: this.selectedIndex // 从 product-variant-dialog.component.ts 文件取过来
      },
      outputs: { fromSubmitted, selected },
      position: {
        top: `${top}%`,
        left: '0',
        width: '100%',
        height: `${100 - top}%`
      }
    });
  }
  // handleGroupBuy(varians: ProductVariant[]) {
  //   const top = 40;
  //   this.dialogService.open(ProductVariantDialogComponent, {
  //     inputs: {},
  //     outputs: {},
  //     position: {
  //       top: `${top}%`,
  //       left: '0',
  //       width: '100%',
  //       height: `${100 - top}%`
  //     }
  //   });
  // }


}

