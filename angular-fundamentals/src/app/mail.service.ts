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

  messages: string[] =[
    '天之骄子，ngFor的使用',
    'Shadows，ngFor的使用',
    'Keriy，ngFor的使用'
  ];

  constructor() { }
}
