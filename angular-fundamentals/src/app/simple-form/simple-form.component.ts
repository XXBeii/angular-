/***
 * 组件创建ng generate component simple-form或ng g c simple-form -it -is
 * 
 * Angular CLI 在创建组件时，自动帮我们添加了app前缀。故selector为app-simple-form
 * 
 * 目录下的 .angular-cli.json 文件中，已经默认帮我们配置了默认的前缀，也可根据需求自行更改：
 * 
 * "app": [{"root":"src","outDir": "dist",...,"prefix": "app",,,,}]
 * 
 * 
 *
 * 
 * ***/


import { Component, OnInit, Input } from '@angular/core';

/***
 * 
 * 通过#variableName 语法，我们获取的对象是对应 DOM 元素的引用
 * 
 * 引入 $event 变量获取正确的鼠标事件。
 * (click)="onClick(myInput.value, $event)"
 * 
 * 当 Angular 在调用我们的事件处理函数时，会自动帮我们处理调用的参数。$event 自动映射为触发的事件。
 * 
 * 除了监听鼠标事件外，我们还可以监听键盘事件。
 * (keydown.enter)="onEnter($event, myInput.value)" 表达式表示我们监听键盘 enter 键的按下事件，按下键盘的 enter 键时，将会调用组件类中定义的 onEnter() 方法。
 * 
 * 同样也可以通过 $event 来获取 KeyboardEvent 对象。
 * 
 * ***/

@Component({
  selector: 'app-simple-form',
  // templateUrl: './simple-form.component.html',
  template: `
    <div>
      这里是@Input引入的数据：{{message}}
      <br>
      <input #myInput type="text" (keydown)="onEnter($event, myInput.value)" [(ngModel)]="message">
      <div>
        <button (click)="onClick($event,myInput.value)">获取输入框内的值、输入框元素、获取鼠标点击事件</button>
        <!-- 输出输入框内的值 -->
        <br>
        <span>这里是输入框内的值：{{myInput.value}}</span>
      </div>
      <br> 
    </div>
  `,
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  @Input()message: string;

  onClick(event,value) {
    console.log(event);
    console.log(value);
  }

  onEnter(event, value) {
    console.log(event);
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
