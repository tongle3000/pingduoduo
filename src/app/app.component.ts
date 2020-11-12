import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TabItem } from './shared/components';
import { filter, map } from 'rxjs/operators';
import { DialogService } from './dialog/services/dialog.service';


// type AddFunc = (x: number, y: number) => number;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'pingduoduo';

  // 6-1 -2 -3 底部footer 下面主要是根据路由 去显示的代码。
  selectedIndex$: Observable<number>;
  // isShowFooter = true;
  handleTabSelect(tab: TabItem) {
    this.router.navigate([tab.link]);
    // this.router.navigate([tab.selectedIcon]);
    console.log('aaaaaaaaaaa', tab.link, this.router.navigate([tab.link]));

    if (tab.link === 'products') { }
  }

  constructor(private router: Router, private route: ActivatedRoute, private dialogService: DialogService) { }

  ngOnInit(): void {
    // console.log('11111111111', this.router.events.pipe);
    this.selectedIndex$ = this.router.events
      .pipe(
        filter(ev => ev instanceof NavigationEnd),
        map((ev: NavigationEnd) => {
          const arr = ev.url.split('/');
          return arr.length > 1 ? arr[1] : 'home';
          // if (arr[1] !== 'products') {
          //   console.log(arr[1]);
          //   return arr.length > 1 ? arr[1] : 'home'; // 大于1 执行 recommend category cha my
          // }
          // console.log('..........................', arr, arr[3]);
        }),
        map(path => this.getSelectedIndex(path))
      );

    // console.log('----------------------------------------', this.selectedIndex$);
  }

  // getSelectedIndex(tab: string) {
  //   console.log(111)
  //   this.isShowFooter = tab !== 'products';
  //   return tab === 'recommend' ? 1 : tab === 'category' ? 2 : tab === 'chat' ? 3 : tab === 'my' ? 4 : tab === 'products' ? 5 : 0;
  // }


  getSelectedIndex(tab: string) {

    // if (tab !== 'products') {

    return tab === 'recommend' ? 1 : tab === 'category' ? 2 : tab === 'chat' ? 3 : tab === 'my' ? 4 : 0;
    // }
    // if (tab === 'products') {
    //   return -1;
    // }
  }


  //  7-5 弹窗 发起拼单
  removeDialog() {
    this.dialogService.close();
  }



}





// interface TopMenu {
//   title: string;
//   link: string;
// }

// // interface AddFunc {
// //   (x: number, y: number): number;
// // }
// type AddFunc = (x: number, y: number) => number;

// interface Dict {
//   [key: string]: string;
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// // tslint:disable-next-line:component-class-suffix
// export class AppComponent2 {
//   title = 'pingduoduo';

//   menus: TopMenu[] = [
//     { title: '热门', link: 'www.baidu.com' },
//     { title: '男装', link: '' },
//     { title: '手机', link: '' }
//   ];

//   dict: Dict = {
//     a: '1',
//     b: '2'
//   };

//   Add: AddFunc = (x, y) => x + y;

//   test() {
//     console.log(this.dict.a); // 1
//     // console.log(this.dict['a']); // 这种ESLINT报错，提示改成上面这种。
//   }
// }
