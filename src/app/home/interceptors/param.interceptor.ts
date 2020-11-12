// 5-5 Http 拦截器 HttpInterceptor

import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable() // 可注入对象
export class ParamInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const modifiedReq = req.clone({
            // setParams: { icode: environment.icode } // 报错. 这个 icode 应该是设置在 environments里的. 我们没有去设置.
        });
        return next.handle(modifiedReq); // 再把处理后的modifiedReq 传到这里继续下一步处理.
    }
}
