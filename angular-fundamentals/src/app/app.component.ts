import { Component, Inject } from '@angular/core';
import {MailService} from "./mail.service";

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h3>{{title}}</h3>
    <div>
      <app-simple-form></app-simple-form>
      {{mailService.message}}
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
