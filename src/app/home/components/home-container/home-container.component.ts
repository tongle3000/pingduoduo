import { Component, OnInit, ViewChild, Inject, ChangeDetectionStrategy } from '@angular/core';

import {
  TopMenu
} from '../../../shared/components';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService, token } from '../../services';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent implements OnInit {

  constructor(
    private router: Router,
    private service: HomeService, @Inject(token) private baseUrl: string,
    private route: ActivatedRoute // 6-3 解决刷新后，顶部的按钮没由显示当前的问题。
  ) { }

  scrollableTabBgColor = '#fff';
  indicatorColor = 'red';
  topMenus$: Observable<TopMenu[]>;
  selectedTabLink$: Observable<string>; // 6-3 解决刷新后，顶部的按钮没由显示当前的问题。 赋路由得到子路由。

  ngOnInit() {
    this.topMenus$ = this.service.getTabs();

    // 6-3 解决刷新后，顶部的按钮没由显示当前的问题。
    this.selectedTabLink$ = this.route.firstChild.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => {
        return params.get('tabLink');
      })
      // 上面 的 map() 改成下面 下面的 es6 写法，得不到值。
      // map(params => params.get('tabLlink'))
    );
    // console.log(this.baseUrl, this.selectedTabLink$);
  }

  handleMenuSelected(topMenu: TopMenu) {
    console.log('------------', topMenu.link);
    this.router.navigate(['home', topMenu.link]);
    // const colors = ['yellow', 'blue', 'black'];
    // const idx = Math.floor(Math.random() * 3); // 0 , 1, 2
    // this.scrollableTabBgColor = colors[idx];
    // console.log(topMenu);
    // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  }

}
