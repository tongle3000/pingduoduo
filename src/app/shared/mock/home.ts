import { Ad, Channel, ImagesSlider, Product, TopMenu } from '../components';


export const imagesSliders: ImagesSlider[] = [{
  id: 1,
  imgUrl: 'https://i3.meishichina.com/attachment/magic/2020/08/11/2020081115971110567848197577.jpg',
  link: '',
  caption: '',
  productVariantId: 1
}, {
  id: 2,
  imgUrl: 'https://i3.meishichina.com/attachment/mofang/2019/12/17/20191217157657460023710138013.jpg',
  link: '',
  caption: '',
  productVariantId: 2
},
{
  id: 3,
  imgUrl: 'https://i3.meishichina.com/attachment/mofang/2020/01/02/20200102157795273065710169539.jpg',
  link: '',
  caption: '',
  productVariantId: 3
}, {
  id: 4,
  imgUrl: 'https://i3.meishichina.com/attachment/mofang/2020/01/09/20200109157855766962210169539.jpg',
  link: '',
  caption: '',
  productVariantId: 4
}
];


export const channels: Channel[] = [{
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

export const topMenus: TopMenu[] = [
  { id: 1, title: '热门', link: 'hot' },
  { id: 2, title: '男装', link: 'men' },
  { id: 3, title: '手机', link: 'mobile' },
  { id: 4, title: '百货', link: 'department' },
  { id: 5, title: '运动', link: 'sports' },
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

// 6-4 ② rxjs 广告为
export const ads: Ad[] = [{
  // tslint:disable-next-line:max-line-length
  imageUrl: 'https://i3.meishichina.com/attachment/magic/2020/08/11/2020081115971110567848197577.jpg',
  link: '',
  categories: ['appliance', 'department', 'cars', 'fruits', 'underwears']
}, {
  imageUrl: 'https://i8.meishichina.com/attachment/recipe/2020/11/12/20201112160514946481369010454906.JPG?x-oss-process=style/p800',
  link: '',
  categories: ['appliance', 'department', 'cars', 'fruits', 'underwears']
},
{
  imageUrl: 'https://i8.meishichina.com/attachment/recipe/2020/11/12/20201112160514946481369010454906.JPG?x-oss-process=style/p800',
  link: '',
  categories: ['appliance', 'department', 'cars', 'fruits', 'underwears']
}, {
  imageUrl: 'https://i8.meishichina.com/attachment/recipe/2020/11/12/20201112160514946481369010454906.JPG?x-oss-process=style/p800',
  link: '',
  categories: ['appliance', 'department', 'cars', 'fruits', 'underwears']
}];


// 6-5 ② 6-5 创建垂直网格组件
export const products: Product[] = [
  {
    id: 1,
    title: 'JEEP/吉普加绒牛仔裤吉普加绒牛仔裤吉普加绒牛仔裤',
    imageUrl: 'https://i3.meishichina.com/attachment/recipe/2020/11/12/2020111216051448652178197577.jpg?x-oss-process=style/c320',
    tags: ['小编推荐', '退货包运费'],
    price: 99,
    priceDesc: '已拼10万+件',
    buyerAvatars: ['https://i3.meishichina.com/attachment/recipe/2020/11/12/2020111216051448652178197577.jpg?x-oss-process=style/c320', 'https://i8.meishichina.com/attachment/recipe/2020/11/12/20201112160514946481369010454906.JPG?x-oss-process=style/p800']
  },
  {
    id: 2,
    title: '海南仙人果',
    imageUrl: 'https://i3.meishichina.com/attachment/recipe/2020/11/12/2020111216051479717048197577.jpg?x-oss-process=style/c320',
    tags: ['急速退款', '坏果包赔'],
    price: 39,
    priceDesc: '已拼3.3万+件',
    buyerAvatars: ['https://i8.meishichina.com/attachment/recipe/2020/11/12/20201112160514946481369010454906.JPG?x-oss-process=style/p800', 'https://i3.meishichina.com/attachment/recipe/2020/11/12/2020111216051448652178197577.jpg?x-oss-process=style/c320']
  },
  {
    id: 3,
    title: '江西赣州脐橙',
    imageUrl: 'https://i3.meishichina.com/attachment/recipe/2020/11/12/2020111216051479717048197577.jpg?x-oss-process=style/c320',
    tags: ['满30返5', '急速退款', '坏果包赔'],
    price: 50,
    priceDesc: '已拼10万+件',
    buyerAvatars: ['https://i3.meishichina.com/attachment/recipe/2020/11/12/2020111216051448652178197577.jpg?x-oss-process=style/c320', 'https://i8.meishichina.com/attachment/recipe/2020/11/12/20201112160514946481369010454906.JPG?x-oss-process=style/p800']
  },
  {
    id: 4,
    title: 'JEEP/吉普加绒牛仔裤吉普加绒牛仔裤吉普加绒牛仔裤',
    imageUrl: 'https://i3.meishichina.com/attachment/recipe/2020/11/12/2020111216051479717048197577.jpg?x-oss-process=style/c320',
    tags: ['小编推荐', '退货包运费'],
    price: 99,
    priceDesc: '已拼10万+件',
    buyerAvatars: ['https://i3.meishichina.com/attachment/recipe/2020/11/12/2020111216051448652178197577.jpg?x-oss-process=style/c320', 'https://i8.meishichina.com/attachment/recipe/2020/11/12/20201112160514946481369010454906.JPG?x-oss-process=style/p800']
  },
  {
    id: 5,
    title: '海南仙人果',
    imageUrl: 'https://i3.meishichina.com/attachment/recipe/2020/11/12/2020111216051479717048197577.jpg?x-oss-process=style/c320',
    tags: ['急速退款', '坏果包赔'],
    price: 39,
    priceDesc: '已拼3.3万+件',
    buyerAvatars: ['https://i8.meishichina.com/attachment/recipe/2020/11/12/20201112160514946481369010454906.JPG?x-oss-process=style/p800', 'https://i3.meishichina.com/attachment/recipe/2020/11/12/2020111216051448652178197577.jpg?x-oss-process=style/c320']
  },
  {
    id: 6,
    title: '江西赣州脐橙',
    imageUrl: 'https://i3.meishichina.com/attachment/recipe/2020/11/12/2020111216051479717048197577.jpg?x-oss-process=style/c320',
    tags: ['满30返5', '急速退款', '坏果包赔'],
    price: 50,
    priceDesc: '已拼10万+件',
    buyerAvatars: ['https://i3.meishichina.com/attachment/recipe/2020/11/12/2020111216051448652178197577.jpg?x-oss-process=style/c320', 'https://i8.meishichina.com/attachment/recipe/2020/11/12/20201112160514946481369010454906.JPG?x-oss-process=style/p800']
  }
];


// export default banners;
