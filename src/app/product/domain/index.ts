import { Product } from 'src/app/shared/components/domain';
import { ImagesSlider } from '../../shared/components/images-slider/images-slider.component';


export interface ProductVariant {
    id: number;
    productId: number;
    product: Product;
    name: string;
    price: number;
    listPrice: number;
    productVariantImages: ImagesSlider[];
}

// 定义 group-item 的数据类型
export interface GroupOrder {
    id: number; // 自己的 ID
    productId: number; // 产品 ID
    startBy: string; // 谁发起的,这是个用户名.
    avatar: string; // 头像
    startAt: Date;  // 发起时间.
    remainingNumber: number; // 差多少人拼齐
}

// 定义产品页底部按钮.

export interface ProductFooterBtn {
    icon: string;
    title: string;
}

export interface ProductVariantList {
    variant: ProductVariant;
    count: number;
}
