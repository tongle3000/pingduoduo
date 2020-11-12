/**
 * @author tonglijian.fyl
 * @date   2020-05-29
 * 装饰器 模式
 */

import { isFunction } from 'lodash';
import MockData from '../mock';
import { Observable, Subscriber } from 'rxjs';
// import { Subscriber } from 'rxjs/src/internal/Subscriber';

export default function Mock(data?: any) {
    return function _implMock<T>(target: object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) {
        const cb = descriptor.value;
        if (!isFunction(cb)) {
            throw new SyntaxError(`@Mock can only be used on functions, not: ${target}`);
        }
        const { enumerable, configurable } = descriptor;
        return {
            enumerable,
            configurable,
            get: () => {
                let response = data;
                if (data === undefined) {
                    const regExpMatchArray = cb.toString().match(/\["API"]\.(.*)\)/);
                    const api = regExpMatchArray[1];
                    if (!MockData[api]) {
                        throw new SyntaxError(`can not find ${api} api in mock/index.ts`);
                    }
                    response = MockData[api];
                }
                return () => {
                    return Observable.create((observer: Subscriber<any>) => {
                        observer.next(response);
                        observer.complete();
                        return function unsubscribe() { };
                    });
                };
            }
        };
    };
}


export {
    MockData
};
