// 负责插进去
import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef, Inject, Type, EmbeddedViewRef, ComponentRef, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';


// 解决 Input Output
export interface DialogPos {
    top: string;
    left: string;
    width: string;
    height: string;
}
export interface ChildConfig {
    inputs: object;
    outputs: object;
    position?: DialogPos; // 定义 left top 等. ? 可不带这个属性.
}


@Injectable({ providedIn: 'root' })
export class DomService {

    private childComponentRef: ComponentRef<any>; // 移除组件

    constructor(
        private resolver: ComponentFactoryResolver, // 组件工厂
        private appRef: ApplicationRef, // 得到 ANGULAR 本身的一个引用.
        private injector: Injector,
        @Inject(DOCUMENT) private document: Document
    ) { }

    /**
     * 增加组件
     * appendComponentTo
     * 作用: 把id="dialog-container" 插入
     */
    public appendComponentTo(
        parentId: string,
        child: Type<any>,
        childConfig: ChildConfig
    ) {
        const childComponentRef = this.resolver.resolveComponentFactory(child).create(this.injector);
        this.appRef.attachView(childComponentRef.hostView); // 这个组件已经创建出来, 再放入 DIV 里面

        this.attachConfig(childConfig, childComponentRef); // 把里面 Input Output 用 attachConfig 设置掉

        this.childComponentRef = childComponentRef; // 因为下面移除要用 而增加的

        // 这里是得到 thml
        const childDOMElement = (childComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

        // 再把创建的 插入到 div 里
        // 把 childDOMElement 当成 parentId 的子节点
        this.document.getElementById(parentId).appendChild(childDOMElement);
    }

    /**
     * 解决 Input Output
     * attachConfig
     */
    public attachConfig(config: ChildConfig, componentRef: ComponentRef<any>) {
        const inputs = config.inputs;
        const outputs = config.outputs;
        // Input 组件内部的 input 属性 替换成外部 config 里面的对应的 input.
        for (const key in inputs) {
            if (inputs.hasOwnProperty(key)) {
                const element = inputs[key];
                componentRef.instance[key] = element;
            }
        }
        // Output
        for (const key in outputs) {
            if (outputs.hasOwnProperty(key)) {
                const element = outputs[key];
                componentRef.instance[key] = element;
            }
        }


    }

    /**
     * 移除组件
     * removeComponent
     * private ChildComponentRef: ComponentRef<any>;
     *
     * 还有问题就是 Input Output 要解决. 怎么设置,定义个方法解决.
     */
    public removeComponent() {
        this.appRef.detachView(this.childComponentRef.hostView);
    }
}
