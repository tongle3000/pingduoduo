import { ProductVariant } from '../../product/domain';

export const productVariants: ProductVariant[] = [
    {
        id: 1,
        productId: 1,
        name: '款式 1',
        price: 19.9,
        listPrice: 58.9,
        productVariantImages: [
            {
                id: 1,
                imgUrl: 'https://i8.meishichina.com/attachment/recipe/2020/11/05/20201105160456160474596710454906.JPG?x-oss-process=style/p800',
                link: '',
                caption: '',
                productVariantId: 1
            }, {
                id: 2,
                imgUrl: 'https://i8.meishichina.com/attachment/recipe/2020/11/05/20201105160456160474596710454906.JPG?x-oss-process=style/p800',
                link: '',
                caption: '',
                productVariantId: 2
            }
        ],
        product: {
            id: 1,
            title: 'JEEP/吉普加绒牛仔裤吉普加绒牛仔裤吉普加绒牛仔裤',
            imageUrl: 'https://upload-images.jianshu.io/upload_images/18428859-36813934492261df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
            tags: ['小编推荐', '退货包运费'],
            price: 99,
            priceDesc: '已拼10万+件',
            buyerAvatars: ['https://upload-images.jianshu.io/upload_images/1202579-02278d315cafa314?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240', 'https://upload-images.jianshu.io/upload_images/16623634-dd2b82b615b125ae?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240']
        }
    },
    {
        id: 2,
        productId: 1,
        name: '款式 2',
        price: 10,
        listPrice: 30,
        productVariantImages: [
            {
                id: 3,
                imgUrl: 'https://upload-images.jianshu.io/upload_images/9073718-961643f4ce827225.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
                link: '',
                caption: '',
                productVariantId: 3
            }, {
                id: 4,
                imgUrl: 'https://upload-images.jianshu.io/upload_images/9073718-961643f4ce827225.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
                link: '',
                caption: '',
                productVariantId: 4
            }
        ],
        product: {
            id: 2,
            title: 'JEEP/吉普加绒牛仔裤吉普加绒牛仔裤吉普加绒牛仔裤',
            imageUrl: 'https://upload-images.jianshu.io/upload_images/9073718-961643f4ce827225.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
            tags: ['小编推荐', '退货包运费'],
            price: 99,
            priceDesc: '已拼10万+件',
            buyerAvatars: ['https://upload-images.jianshu.io/upload_images/9073718-961643f4ce827225.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240', 'https://upload-images.jianshu.io/upload_images/9073718-961643f4ce827225.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240']
        }
    }
];

// export interface ProductVariant {
//     id: number;
//     product: Product;
//     name: string;
//     price: number;
//     listPrice: number;
//     productVariantImages: ImagesSlider[];
// }
