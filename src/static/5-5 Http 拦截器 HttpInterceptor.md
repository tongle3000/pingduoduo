## 新建 interceptors 文件夹

#   param.interceptor.ts
    输入 ng-http-i 选择ng-http-interceptor  回车,生成默认代买, 改下名 ParamInterceptor

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

#   app.module.ts
    providers: [
        {
        provide: LOCALE_ID,
        useValue: 'zh-Hans'
        },
        {
        provide: HTTP_INTERCEPTORS, // 我们要放的令牌
        useClass: ParamInterceptor,
        multi: true
        },
        {
        provide: HTTP_INTERCEPTORS, // 我们要放的令牌
        useClass: NotificationInterceptor,
        multi: true
        }
    ],

#   notification.interceptor.ts 拦截器
    输入 ng-http-i 选择ng-http-interceptor  改名: NotificationInterceptor


    // 拦截器
    import { Injectable } from '@angular/core';
    import {
        HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
    } from '@angular/common/http';
    import { tap } from 'rxjs/operators';                        // 增加的
 
    @Injectable()
    export class NotificationInterceptor implements HttpInterceptor {
        intercept(req: HttpRequest<any>, next: HttpHandler) {
            // return next.handle(req); // 对处理的结果进行处理
            return next.handle(req).pipe(                              //.pipe()方法里面,增加的
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse && event.status >= 200 && event.status < 300) {
                        console.log('[假装弹出 toast] 请求成功!');
                    }
                })
            );
        }
    }
