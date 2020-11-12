## IDE vs code 


vs code  angular开发插件：

Debugger for chorome
Path intellisense
angular files
angular language service
angular 8 snippets


## chrome商店 上安装 augury 插件



ls -la 查看目录

如果angular安装 有error 提示，得删掉 node_modules
rm -rf node_modules/
再执行 npm install


rm -fr pinduoduo 删除项目
ng new pinduoduo --skip-install --style css --routing false

ng serve 启动项目


## package.json
 scripts：指定脚本任务
 dependcencies： 依赖软件包
 devDependencies: 开发阶段依赖的软件包
 Semantic 版本号： major.minor.patch

## ngStyle
    [ngStyle]="{'background-color':backgroundColor}"

    @Input() backgroundColor = '#fff';

    [backgroundColor]="'red'"
    backgroundColor="yellow"


## [class.active]="i === selectedIndex"
    改为
    [ngStyle]="{color:i === selectedIndex ? titleActiveColor : titleColor}"

    @Input() titleActiveColor = 'red';   //默认颜色.
    @Input() titleColor = 'brown';

    // 接下来,可在下面 titleColor="颜色" 
    <app-scrollable-tab [menus]="topMenus" backgroundColor="yellow" (menuSelected)="handleMenuSelected($event)">

    加入 topmenu 要引入到其他模块中,又要改颜色的话,可以通过这样去改.

## 组件的生命周期
    constructor()    // 构造函数永远首先被调用

    ngOnChanges()    // 输入小户型变化时被调用
    ngOnInit()       // 组件初始化时被调用
    ngDoCheck()      // 脏值检测时调用

        ngAfterContentInit()     // 当内容投影 ng-content 完成时调用
        ngAfterContentChecked()  // Angular 检测投影内容时调用(多次)
        ngAfterViewInit()        // 当组件视图(子视图)初始化完成时
        ngAfterViewChecked()     // 当检测视图变化时(多次)

    ngOnDestroy()     // 当组件销毁时

## 创建组件 ng generate component 
    ng generate component components/imagesSlider
    可缩写为: ng g c components/imagesSlider


##   
   