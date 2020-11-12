import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { TestModule } from './test/test.module';

import localZh from '@angular/common/locales/zh-Hans';
import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeModule, ParamInterceptor } from './home';
import { NotificationInterceptor } from './home/interceptors/notification.interceptor';
import { MyModule } from './my';
import { RecommendModule } from './recommend';
import { ChatModule } from './chat';
import { CategoryModule } from './category';
import { ProductModule } from './product';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // BrowserModule 导出CommondModule ApplicationModule, 也只在根模块需要,其他模块不需要.
    // ApplicationModule: 是整个应用的一个模块.负责引导,负责初始化一些东西.
    // CommondModule: 是其他模块都需要他.根模块其实不需要单独导入他. 他 Exports 了 NgClass NgFor NgStyle NgIf ... 很多这些指令.
    SharedModule,
    HomeModule,
    AppRoutingModule,
    TestModule,
    HttpClientModule,
    MyModule,
    ChatModule,
    RecommendModule,
    CategoryModule,
    ProductModule
  ],
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
      useClass: NotificationInterceptor, // 拦截器
      multi: true
    }
  ],
  bootstrap: [AppComponent] // 是根模块有的东西. 其他模块没有这个bootstrap.
})
export class AppModule {
  constructor() {
    registerLocaleData(localZh, 'zh');
  }
}





/**
 * AppModule
 * Imports数组: 导入本模块 需要的 依赖模块,包括第三方(只能模块,不能是组件,指令等)
 *
 * BrowserModule
 * BrowserAnimat
 * HttpClientModule
 * SharedModule      分享
 * HomeModule        首页
 * ProductModule     产品页
 * AppRoutingModule  路由
 */

/**
 * Exports   暴露给其他模块使用的模块,指令,管道等
 */
/**
 * Providers数组: 模块需要使用的 服务
 */

/**
 * Declarations 我这个模块有哪些组件,指令,管道. 每个组件,指令,管道只能在一个模块中声明.
 */
