import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductVariant } from '../domain';
import { environment } from 'src/environments/environment';

import Mock, { MockData } from 'src/app/shared/decorator/Mock';

@Injectable({
    providedIn: 'root'
})

export class OrderService {
    constructor(private http: HttpClient) { }

    @Mock(MockData.productVariants)
    getProductVariantsByProductId(productId: string) {
        return this.http.get<ProductVariant[]>(
            `${environment.baseUrl}/productVariants`,
            {
                params: {
                    _expand: 'product',
                    _embed: 'productVariantImages',
                    productId
                }
            }
        );
    }


}

