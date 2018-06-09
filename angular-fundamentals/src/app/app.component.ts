import { Component, Inject } from '@angular/core';
import {MailService} from "./mail.service";

/***
 * 
 * 在 AppComponent 组件的模板中，我们使用 let item of items; 语法迭代数组中的每一项，另外我们使用 index as i 用来访问数组中每一项的索引值。除了 index 外，我们还可以获取以下的值：
 * 
 * first: boolean - 若当前项是可迭代对象的第一项，则返回 true
 * last: boolean - 若当前项是可迭代对象的最后一项，则返回 true
 * even: boolean - 若当前项的索引值是偶数，则返回 true
 * odd: boolean - 若当前项的索引值是奇数，则返回 true
 * 
 * 需要注意的是，*ngFor 中的 * 号是语法糖，表示结构指令。因为该语法最终会转换成：
 * 
 * <ng-template ngFor let-item [ngForOf]="items" let-i="index">
 *  <li>...</li>
 * </ng-template>
 * 
 * 除了 *ngFor 外，常用的结构指令还有 *ngIf、*ngSwitchCase 指令。
 * 
 * ***/

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h3>{{title}}</h3>
    <div>
      <app-simple-form></app-simple-form>
      <ul>
        <li *ngFor="let message of mailService.messages; index as i;">
          {{i}} - {{message}}
        </li>
      </ul>
      <p>API_URL: {{apiUrl}}</p>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello, Angular';
  constructor(
    @Inject('apiUrl') private apiUrl,
    private mailService: MailService) {}

  /***
   * 
   * 使用前须先引用：import {MailService} from "./mail.service";
   * 
   * 引用后还需注入才可调用，注入方式：
   * 
   * 1、使用 constructor(private mailService: MailService) 方式注入服务，
   * 
   * 2、我们也可以使用 Inject 装饰器来注入 MailService 服务:
   * 
   * constructor(@Inject(MailService) private mailService) {}
   * 
   * 不过对于 Type 类型(函数类型) 的对象，我们一般使用 constructor(private mailService: MailService) 方式进行注入。
   * 而 Inject 装饰器一般用来注入非 Type 类型的对象。
   * 
   * 
   * ***/

}
