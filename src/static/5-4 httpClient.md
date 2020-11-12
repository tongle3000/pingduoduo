## httpClient
    只在根模块中导入  app.module.ts
    且只需导入一次

    get post put delete 

    返回的值 是 Obsevable 类型 (rxcs)
    必须订阅,才会发送请求,否则不会发送




# settings.json 文件
    "rest-client.environmentVariables": {
        "$shared":{
                "iCode": "123456"
            },
            "dev": { // 生产环境
                "host": "http://localhost:4200"
            },
            "prod": { // 生产环境
                "host": "https://local.dev"
            },
            "imooc": { // 慕课网的 API 
                "host": "http://apis.imooc.com/api"
            }
        } 
    }

##  rest.http 文件
    // 我们这里没有慕课网的 iCode
    ###
    GET {{host}}/banners?icode={{iCode}} 
    //上面时取到轮播图的数据.
    // 这里的 host 是在 settings.json 文件 的 "rest-client.environmentVariables":属性定义了
    // "imooc": { "host": "http://apis.imooc.com/api" }

    ###
    GET {{host}}/tabs?icode={{iCode}} // 顶部 tab 按钮数据

    ###
    GET {{host}}/channels?icode={{iCode}} // 网格频道菜单数据.

##  页面中应用 API
    app.module.ts imports: 引入 HttpClientModule 
    (只要在这个文件中引用了这个服务,其他地方都能使用.)

    topMenus: TopMenu[] = [ { id: 1, title: '热门', link: 'hot' },...];
    channels: Channel[] = [
        {
            id: 1,
            title: '投影组件',
            icon: 'https://static.easyicon.net/preview/119/1197675.gif',
            link: ''
        },...];
    imagesSliders: ImagesSlider[] = [{
        // tslint:disable-next-line:max-line-length
        imgUrl: 'https://upload-images.jianshu.io/upload_images/16623634-dd2b82b615b125ae?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        link: '',
        caption: 'aaa'
    },...];
    getTabs() {
        return this.topMenus;
    }
    getChannels() {
        return this.channels;
    }
    getBanners() {
        return this.imagesSliders;
    }


    把上面这些数据改为:
#   environment.ts , environment.prod.ts 文件里都增加下面这2句.
    export const environment = {
        production: false,
        baseUrl: 'http://apis.imooc.com/api', // 5-4 httpClient 增加这句.
        icode: 'xxxx' // 5-4 httpClient 增加这句.
    };

    export const environment = {
        production: true,
        baseUrl: 'http://apis.imooc.com/api', // 5-4 httpClient 增加这句.
        icode: 'xxxx' // 5-4 httpClient 增加这句.
    };


    HttpClient 注入进来
    import { HttpClient } from './@angular/common/http'; // 没提示自己手写.

    construcoter(private http: HttpClient) { }

    getTabs() {
        return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs`, {
            params:{icode: `${environment.icode}` }
        });
    }
    getChannels() {
        return this.http.get<Channel[]>(`${environment.baseUrl}/channels`, {
            params:{icode: `${environment.icode}` }
        });
    }
    getBanners() {
        return this.http.get<ImagesSlider[]>(`${environment.baseUrl}/banners`, {
            params:{icode: `${environment.icode}` }
        });
    }

#   home-containter.component.ts 文件
    ngOnInit() {
        this.topMenus = this.service.getTabs();
        console.log(this.baseUrl);
    }
    改为:
    ngOnInit() {
        this.topMenus = this.service.getTabs().subscribe(tabs => {
            this.topMenus = tabs
        });
        console.log(this.baseUrl);
    }

#   home-detail.component.ts 文件
    this.imagesSliders = this.service.getBanners(); // 改为:
    this.imagesSliders = this.service.getBanners().subscribe(banners => {
        this.imagesSliders = banners
    });

    this.channels = this.service.getChannels(); // 改为:
    this.channels = this.service.getChannels().subscribe(channels => {
        this.channels = channels
    });

    上面这些改好,运行,不显示. 因为我们这里值进行改变了,没有进行脏值检测,我们用了 OnPush, 值检测 @Input.

    这时的加上一句 this.cd.markForCheck(); 

    this.imagesSliders = this.service.getBanners().subscribe(banners => {
        this.imagesSliders = banners;
        this.cd.markForCheck(); 
    });

    this.channels = this.service.getChannels().subscribe(channels => {
        this.channels = channels;
        this.cd.markForCheck(); 
    });

 