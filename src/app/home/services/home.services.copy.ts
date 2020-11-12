import { Injectable } from '@angular/core';
import { TopMenu, ImagesSlider, Channel } from 'src/app/shared/components';
import { of } from 'rxjs';

// @Injectable({
//     providedIn: 'root'
// })
export class HomeService {
    topMenus: TopMenu[] = [
        { id: 1, title: '热门', link: 'hot' },
        { id: 2, title: '男装', link: 'men' },
        { id: 3, title: '手机', link: 'mobile' },
        { id: 4, title: '百货', link: 'department' },
        { id: 5, title: '运动', link: 'sports  ' },
        { id: 6, title: '家纺', link: 'textile' },
        { id: 7, title: '食品', link: 'food' },
        { id: 8, title: '电器', link: 'dianqi' },
        { id: 8, title: '鞋包', link: 'xiebao' },
        { id: 10, title: '汽车', link: 'cars' },
        { id: 11, title: '水果', link: 'fruit' },
        { id: 12, title: '电脑', link: 'computer' },
        { id: 13, title: '电饭锅', link: 'dianfanguo' },
        { id: 14, title: '内衣', link: 'neiyi' },
        { id: 15, title: '母婴', link: 'muying' },
        { id: 16, title: '家装', link: 'jiazhuang' },
        { id: 17, title: '美妆', link: 'makeup' },
        { id: 18, title: '家具', link: 'furnitures' }
    ];
    channels: Channel[] = [
        {
            id: 1,
            title: '投影组件',
            icon: 'https://static.easyicon.net/preview/119/1197675.gif',
            link: ''
        },
        {
            id: 2,
            title: '投影组件',
            icon: 'https://static.easyicon.net/preview/119/1197675.gif',
            link: ''
        },
        {
            id: 3,
            title: '投影组件',
            icon: 'https://static.easyicon.net/preview/119/1197675.gif',
            link: ''
        },
        {
            id: 4,
            title: '投影组件',
            icon: 'https://static.easyicon.net/preview/119/1197675.gif',
            link: ''
        },
        {
            id: 5,
            title: '投影组件',
            icon: 'https://static.easyicon.net/preview/119/1197675.gif',
            link: ''
        },
        {
            id: 6,
            title: '投影组件',
            icon: 'https://static.easyicon.net/preview/119/1197675.gif',
            link: ''
        },
        {
            id: 7,
            title: '投影组件',
            icon: 'https://static.easyicon.net/preview/119/1197675.gif',
            link: ''
        },
        {
            id: 8,
            title: '投影组件',
            icon: 'https://static.easyicon.net/preview/119/1197675.gif',
            link: ''
        },
        {
            id: 1,
            title: '投影组件',
            icon: 'https://static.easyicon.net/preview/119/1197675.gif',
            link: ''
        },
        {
            id: 2,
            title: '投影组件',
            icon: 'https://static.easyicon.net/preview/119/1197675.gif',
            link: ''
        },
        {
            id: 3,
            title: '投影组件',
            icon: 'https://static.easyicon.net/preview/119/1197675.gif',
            link: ''
        },
        {
            id: 4,
            title: '投影组件',
            icon: 'https://static.easyicon.net/preview/119/1197675.gif',
            link: ''
        },
        {
            id: 5,
            title: '投影组件',
            icon: 'https://static.easyicon.net/preview/119/1197675.gif',
            link: ''
        },
        {
            id: 6,
            title: '投影组件',
            icon: 'https://static.easyicon.net/preview/119/1197675.gif',
            link: ''
        },
        {
            id: 7,
            title: '投影组件',
            icon: 'https://static.easyicon.net/preview/119/1197675.gif',
            link: ''
        },
        {
            id: 8,
            title: '投影组件',
            icon: 'https://static.easyicon.net/preview/119/1197675.gif',
            link: ''
        }
    ];


    imagesSliders: ImagesSlider[] = [{
        id: 1,
        // tslint:disable-next-line:max-line-length
        imgUrl: 'https://upload-images.jianshu.io/upload_images/16623634-dd2b82b615b125ae?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        link: '',
        caption: 'aaa'
    },
    {
        id: 2,
        imgUrl: 'https://upload-images.jianshu.io/upload_images/535767-622a91a25c630eeb.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        link: '',
        caption: 'asdfadsfasdf'
    },
    {
        id: 3,
        imgUrl: 'https://upload-images.jianshu.io/upload_images/9070317-20250d650a0a267c.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        link: '',
        caption: 'ddd'
    }, {
        id: 4,
        imgUrl: 'https://upload-images.jianshu.io/upload_images/15684874-6c727205351c7835.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        link: '',
        caption: 'a'
    }];

    getTabs() {
        return of(this.topMenus);
    }
    getChannels() {
        return of(this.channels);
    }
    getBanners() {
        return of(this.imagesSliders);
    }
}
