import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from 'src/app/dialog';
import { Observable, Subject, combineLatest, merge } from 'rxjs';
import { tap, share, map } from 'rxjs/operators';
import { ProductVariantList } from '../../domain';


@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmOrderComponent implements OnInit {

  item$: Observable<ProductVariantList | null>;
  count$ = new Subject<number>();

  totalPrice$: Observable<number>;
  // payments: Pyment[];

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
    this.item$ = this.dialogService.getData().pipe(
      tap(val => console.log(val)),
      share()
    );
    // this.item$.subscribe((res) => {
    //   console.log(res)
    // })
    const unitPrice$ = this.item$.pipe(
      map((item) => {
        console.log('price', item.variant.price);
        return item.variant.price;
      }
      )
    );
    const amount$ = this.item$.pipe(
      map((item) => item.count)
    );
    const mergedCount$ = merge(amount$, this.count$).pipe(
      tap((res) => console.log('111', res))
    );

    this.totalPrice$ = combineLatest([unitPrice$, mergedCount$]).pipe(
      map(([price, amount]) => {
        console.log(price, amount);
        return price * amount;
      }),
      tap(res => console.log(res))
    );


    // this.item$ = this.dialogService.getData().pipe(
    //   tap(val => console.log(val, this.dialogService.getData()))
    // );
    // this.item$ = this.dialogService.getData().pipe(
    //   tap(val => console.log(val)),
    //   share()
    // );
    // const unitPrice$ = this.item$.pipe(
    //   map((item: { variant: ProductVariant; count: number }) => item.variant.price)
    // );
    // const amount$ = this.item$.pipe(
    //   map((item: { variant: ProductVariant; count: number }) => item.count)
    // );

    // const mergedCount$ = merge(amount$, this.count$);
    // // --1--------3----
    // // -----2----------
    // // merge合成叠加的流 --1--2--3--

    // this.totalPrice$ = combineLatest([unitPrice$, mergedCount$]).pipe(
    //   map(([price, amount]) => price * amount)
    // );

  }
  handleAmountChange(count: number) {
    this.count$.next(count);
  }

  handlePay() { }

}
