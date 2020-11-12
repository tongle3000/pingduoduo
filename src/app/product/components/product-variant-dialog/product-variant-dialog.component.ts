// 这些值定义好,取好. 还要放入this.dialogService.open() 事件里的 Inputs Outputs (product-footer.component.ts文件里)
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ProductVariant } from '../../domain/index';
import { DialogService } from 'src/app/dialog';
import Mock, { MockData } from 'src/app/shared/decorator/Mock';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-variant-dialog',
  templateUrl: './product-variant-dialog.component.html',
  styleUrls: ['./product-variant-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductVariantDialogComponent implements OnInit {

  // input output 属性
  @Input() variants: ProductVariant[] = [];
  @Output() fromSubmitted = new EventEmitter();
  @Output() selected = new EventEmitter();
  @Input() selectedVariantIndex = -1; // 当前选中的索引.

  count = 1; // 成员变量.

  constructor(private dialogService: DialogService, private router: Router) {

  }

  ngOnInit() {
  }

  // 获得价格
  // @Mock(MockData.productVariants.length)
  get price() {
    // console.log('===========this.variants.length==========', this.variants.length);
    if (this.selectedVariantIndex < 0 || this.variants.length === 0) { return 0; }
    return this.variants[this.selectedVariantIndex].price;
  }

  get selectedVariantImage() {
    if (this.selectedVariantIndex < 0) {
      return '';
    }
    return this.variants[this.selectedVariantIndex].productVariantImages[0].imgUrl;
  }

  get selectedVariantName() {
    if (this.selectedVariantIndex < 0) {
      return '';
    }
    return this.variants[this.selectedVariantIndex].name;
  }

  handleSelection(idx: number) {
    this.selectedVariantIndex = idx;
    this.selected.emit(this.selectedVariantIndex);
    console.log(this.selected.emit(this.selectedVariantIndex), this.selectedVariantIndex, idx);
  }

  // 传递过来的参数其实是个数量
  handleAmountChange(count: number) {
    this.count = count;
  }

  handleConfirm() {
    if (this.selectedVariantIndex < 0) {
      return;
    }
    this.fromSubmitted.emit({
      variant: this.variants[this.selectedVariantIndex],
      count: this.count
    });
    this.dialogService.close();
    console.log(this.selectedVariantIndex); //
    // this.router.navigate(['/orders/confirm']);
  }

}
