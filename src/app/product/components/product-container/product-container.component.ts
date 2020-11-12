import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute } from '@angular/router';
import { ProductVariant } from '../../domain/index';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductContainerComponent implements OnInit {

  variants$: Observable<ProductVariant[]>;
  selectedIndex = 0;

  // // 自己添加
  // @Input() selectedTabLink: string; // 6-3 解决刷新后，顶部的按钮没由显示当前的问题。
  // @Output() menuSelected = new EventEmitter(); // EventEmitter 事̥件̥发̥射̥器̥.

  constructor(
    private route: ActivatedRoute,
    private service: OrderService,
    // private dialogService: DialogService // 7-7 弹窗 实战对话框  移动 product-footer 里了
  ) { }

  ngOnInit() {

    const productId$ = this.route.paramMap.pipe(
      filter(params => params.has('productId')),
      map(params => params.get('productId'))
    );

    this.variants$ = productId$.pipe(
      switchMap(productId =>
        this.service.getProductVariantsByProductId(productId)
      )
    );

  }

  changeSelect(ev) {
    this.selectedIndex = ev;
    console.log(ev);
  }

}
