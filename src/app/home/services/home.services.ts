import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import Mock, { MockData } from 'src/app/shared/decorator/Mock';
import { TopMenu, Channel, Ad, ImagesSlider, Product } from 'src/app/shared/components';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: 'root'
})

export class HomeService {
    constructor(private http: HttpClient) { }

    // export class HomeService {

    @Mock(MockData.topMenus)
    getTabs() {
        // return of([]);
        return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs`, {
            params: { icode: `${environment.icode}` }
        });
    }

    @Mock(MockData.channels)
    getChannels() {
        // return of([]);
        return this.http.get<Channel[]>(`${environment.baseUrl}/banner`);
    }

    @Mock(MockData.banners)
    getBanners() {
        // return of([]);
        return this.http.get<ImagesSlider[]>(`${environment.baseUrl}/banner`);
    }

    // 6-4 ③ rxjs 广告为
    @Mock(MockData.ads)
    getAdByTab(tab: string) {
        // return of([]);
        return this.http.get<Ad[]>(`${environment.baseUrl}/ads`, {
            params: { categories_like: tab }
        });
    }

    // 6-5 ③ 6-5 创建垂直网格组件
    @Mock(MockData.products)
    getProductByTab(tab: string) {
        // return of([]);
        return this.http.get<Product[]>(`${environment.baseUrl}/products`, {
            params: { categories_like: tab }
        });
    }
}
