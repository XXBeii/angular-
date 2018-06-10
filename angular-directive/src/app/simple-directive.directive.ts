import { Directive, HostBinding, Input } from '@angular/core';
// import { getRenderedText } from '@angular/core/src/render3';

// 使用 HostBinding 装饰器，实现元素的属性绑定
// 本例中该用于演示如何利用 HostBinding 装饰器，设置元素的 innerText 属性

@Directive({
  selector: '[simpleDirective]'
})
export class SimpleDirectiveDirective {

  @Input() greet: string;
  // @HostBinding() innerText = '这里是simple directive修改过的文档内容';
  @HostBinding() get innerText() {
    return this.greet;
  }

  constructor() { }

}
