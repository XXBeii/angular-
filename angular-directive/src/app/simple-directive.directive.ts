import { Directive, HostBinding, Input, HostListener } from '@angular/core';
import { getRenderedText } from '@angular/core/src/render3';


@Directive({
  selector: '[simpleDirective]'
})
export class SimpleDirectiveDirective {

  // 利用 Input 装饰器，定义指令的输入属性，从而实现让用户自定义问候内容
  @Input() greet: string;

  // 使用 HostBinding 装饰器，实现元素的属性绑定，本利绑定的元素的innerText 属性
  // @HostBinding() innerText = '这里是simple directive修改过的文档内容';
  @HostBinding() get innerText() {
    return this.greet;
  }

  // 使用 HostListener 属性装饰器，实现元素的事件绑定
  @HostListener('click', ['$event']) onClick(event) {
    this.greet = 'HostListener绑定Clicked!事件';
  }

  // 通过 Attribute 装饰器来获取指令宿主元素的属性值


  constructor() { }

}
