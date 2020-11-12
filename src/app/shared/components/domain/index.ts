export interface TabItem {
    title: string;
    icon: string;
    link: string;
    selectedIcon: string;
}

// 6-4 ① rxjs 广告为
export interface Ad {
    imageUrl: string;
    link: string;
    categories: string[];
}

// 6-5 ① 6-5 创建垂直网格组件
export interface Product {
    id: number;
    title: string;
    imageUrl: string;
    tags: string[]; // 满足多少包邮
    price: number; // 价格
    priceDesc: string; // 已拼多少件
    buyerAvatars: string[]; // 买家头像集合.
}
