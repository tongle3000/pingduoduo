//  7-5 弹窗 发起拼单
// 这种写法, 只适合 很少的代码,样式
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dialog',
    template: `
        <div class="container">
            <ng-content></ng-content>
        </div>
    `,
    styles: [`
        .container {
            display: flex;
            flex-direction:column;
            justify-content: start;
            align-items: stretch;
            height: 100%;
        }
    `],
    // templateUrl: './name.component.html',
    // styleUrls: ['./name.component.scss']
})
export class DialogComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
