import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TabItem } from '../domain';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  tabItems: TabItem[] = [
    {
      title: '首页',
      icon: '/assets/tabs/home.svg',
      link: 'home',
      selectedIcon: '/assets/tabs/home2.svg'
    },
    {
      title: '推荐',
      icon: '/assets/tabs/recommend.svg',
      link: 'recommend',
      selectedIcon: '/assets/tabs/recommend2.svg'
    },
    {
      title: '分类',
      icon: '/assets/tabs/category.svg',
      link: 'category',
      selectedIcon: '/assets/tabs/category2.svg'
    },
    {
      title: '聊天',
      icon: '/assets/tabs/chat.svg',
      link: 'chat',
      selectedIcon: '/assets/tabs/chat2.svg'
    },
    {
      title: '个人中心',
      icon: '/assets/tabs/my.svg',
      link: 'my',
      selectedIcon: '/assets/tabs/my2.svg'
    }
  ];

  @Input() selectedIndex = 0;
  @Output() tabSelected = new EventEmitter();
  toggleSelectedTab(idx: number) {
    this.selectedIndex = idx;
    this.tabSelected.emit(this.tabItems[idx]);
  }

  constructor() { }

  ngOnInit() {

  }


}
