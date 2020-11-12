import { Directive, Input, HostBinding, HostListener } from '@angular/core';
import { DialogService } from '../../dialog';

@Directive({
    selector: '[appRemoveDialog]',
})
export class RemoveDialogDirective {
    constructor(private dialogService: DialogService) { }

    // 4-4 指令事件绑定
    @HostListener('click', ['$event.target'])
    handleClick(/*ev*/) {
        // console.log(ev);
        this.dialogService.close();
    }

}
