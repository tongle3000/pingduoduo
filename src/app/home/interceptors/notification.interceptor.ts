// 5-5 拦截器
import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // return next.handle(req); // 对处理的结果进行处理
        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse && event.status >= 200 && event.status < 300) {
                    console.log('[假装弹出 toast] 请求成功!', event.status); // 5-5 需要有1 个 post请求成功的话,就会打印这条消息, 我们暂时没数据,弹不了
                }
            })
        );
    }
}

