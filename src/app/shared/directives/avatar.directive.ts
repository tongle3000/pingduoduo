import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[appAvatar]',
})
export class AvatarDirective {
    // @HostBinding('style.width') avatarSize绑定成他的宽度属性.
    @Input() @HostBinding('style.width') @HostBinding('style.height') avatarSize = '1.5rem';
    @HostBinding('style.border-radius') radius = '50%';
    @HostBinding('style.object-fit') fitMode = 'cover';
    @HostBinding('style.border') imgBorder = '1px solid #fff';
}
