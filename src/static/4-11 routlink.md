## 新建个组件 home-grand



## home.module.ts 引入
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent
  ]



## home-routing.module.ts 文件

    children: [
          {
            path: 'grand',
            component: HomeGrandComponent
          }
    ]

## home-detail.component.html
<div class="box">
  <a [routerLink]="['grand']">routerLink to grand</a>------
  <a [routerLink]="['grand']" routerLinkActive="active">routerLink active</a>
  <router-outlet></router-outlet>
</div>