// 4-1 装饰器(注解): 返回函数的函数
// 应用于属性// 应用于属性
export function Emoji() {
    return (target: object, key: string) => {
        let val = target[key];

        const getter = () => {
            return val;
        };

        const setter = (value: string) => {
            val = `👿 ${value} 👿`;
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}

// 002 应用于函数
// 4-1 装饰器(注解) 002   decorator/index.ts
export function Confirmable(message: string) {
    return (target: object, key: string, descriptor: PropertyDescriptor) => {
        const original = descriptor.value;
        // tslint:disable-next-line:space-before-function-paren
        descriptor.value = function (...args: any[]) {
            const allow = window.confirm(message);
            if (allow) {
                const result = original.apply(this, args);
                return result;
            }
            return null;
        };
        return descriptor;
    };
}


// function extend<First, Second>(first: First, second: Second): First & Second {
//     return(result) => {
//         const result: Partial<First & Second> = {};
//         for (const prop in first) {
//             if (first.hasOwnProperty(prop)) {
//                 (result as First)[prop] = first[prop];
//             }
//         }
//         for (const prop in second) {
//             if (second.hasOwnProperty(prop)) {
//                 (result as Second)[prop] = second[prop];
//             }
//         }
//         return result as First & Second;
//     };
// }
