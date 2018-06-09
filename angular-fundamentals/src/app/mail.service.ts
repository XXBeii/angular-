/***
 * 
 * 注入服务
 * 
 * 新建服务：ng g s mail
 * 
 * 1、在app.module.ts配置服务：
 * import {MailService} from "./mail.service";
 * @NgModule({
 *    ...  
 *    providers: [MailService],  
 *    bootstrap: [AppComponent]
 * })
 * 
 * 2、更新服务，在本服务内编写所需服务相关代码
 * 
 * 3、使用服务，在app.component.ts使用服务：具体详看app.component.ts解释
 * 
 * 
 * ***/

import { Injectable } from '@angular/core';

@Injectable()
// @Injectable({
//   providedIn: 'root'
// })
export class MailService {

  // message: string  ='该消息来自MailService';

  messages: Array<{id: number, text: string}> =[
    {id: 0, text: '天之骄子，加入修仙之路群'},
    {id: 1, text: 'Shadows，加入修仙之路群'},
    {id: 2, text: 'Keriy，加入修仙之路群'}
  ];

  update(id, text) {
    this.messages = this.messages.map(msg => {
      return msg.id === id ? {id, text} : msg;
    });
  }

  constructor() { }
}
