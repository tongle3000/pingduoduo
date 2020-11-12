// 负责数据的传送 怎么打开和关闭这个 dialog

import { Injectable, Inject, Type } from '@angular/core';
import { DomService, ChildConfig } from './dom.service';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductVariant, ProductVariantList } from 'src/app/product/domain';

@Injectable({ providedIn: 'root' })
export class DialogService {

    private readonly dialogElementId = 'dialog-container'; // 固定的 id
    private readonly overlayElementId = 'overlay';

    // 解决 弹窗 数据传输问题 ①
    // BehaviorSubject 是个流, 它有个特性, 它能保存流当中的 最新的元素, 特别适合存取.
    // private data$ = new BehaviorSubject<object | null>(null);
    // ①解决刷新 没数据
    private data$: BehaviorSubject<object | null>;


    constructor(
        private domService: DomService,
        @Inject(DOCUMENT) private document: Document
    ) {
        // ②解决刷新 没数据
        const initialData = localStorage.getItem('data');
        this.data$ = new BehaviorSubject<object | null>(JSON.parse(initialData));

    }



    // OPEN
    open(component: Type<any>, childConfig: ChildConfig) {
        this.domService.appendComponentTo(this.dialogElementId, component, childConfig); // 传入固定的 ID

        // 解决 position 没设置进去的问题
        if (childConfig.position) {
            // tslint:disable-next-line:no-shadowed-variable
            const element = this.document.getElementById(this.dialogElementId);
            element.style.top = childConfig.position.top;
            element.style.left = childConfig.position.left;
            element.style.width = childConfig.position.width;
            element.style.height = childConfig.position.height;
        }

        this.toggleAll(); // 打开关闭 弹窗的方法

        // 解决 弹窗 数据传输问题 ③
        // BehaviorSubject 是个流, 它有个特性, 它能保存流当中的 最新的元素, 特别适合存取.
        this.data$.next(null); // 打开时得把这个数据流清空一下. 否则每次打开会出现上一次的数据.

    }

    // close
    close() {
        this.domService.removeComponent();
        this.toggleAll(); // 打开关闭 弹窗的方法
    }


    saveData(data: object | null) {
        this.data$.next(data);

        // ③解决刷新 没数据
        localStorage.setItem('data', JSON.stringify(data));

        // console.log('datadatadatadatadatadatadata', data);
    }

    // 解决 弹窗 数据传输问题 ②
    // BehaviorSubject 是个流, 它有个特性, 它能保存流当中的 最新的元素, 特别适合存取.
    getData(): Observable<ProductVariantList> {
        return this.data$.asObservable() as Observable<ProductVariantList>;
    }


    private toggleAll() {
        this.toggleVisibility(this.document.getElementById(this.dialogElementId));
        this.toggleVisibility(this.document.getElementById(this.overlayElementId));
    }

    private toggleVisibility(element: HTMLElement) {
        if (element.classList.contains('show')) {
            element.classList.remove('show');
            element.classList.add('hidden');
            return; // 要 return 下, 不然 一直执行,永远加不上.
        }
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
            element.classList.add('show');
            // return;
            // return; 这个是多余的.不用加.
        }
    }
}
