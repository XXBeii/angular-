import { Component, Inject } from '@angular/core';
import { MailService } from "./mail.service";
// import { Observable } from 'rxjs';
// import 'rxjs/add/observable/of';

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
      <app-simple-form *ngFor="let message of mailService.messages;"
        [message]="message.text"
        (update)="onUpdate(message.id, $event.text)">
      </app-simple-form>
      <br>
      <br>
      <div>
      这里展示service的数据：
      <br>
        <ul>
          <li *ngFor="let message of mailService.messages; index as i;">
            {{i}} - {{message.text}}
          </li>
        </ul>
      </div>

      <p>API_URL: {{apiUrl}}</p>
    </div>

    <ng-template #fetching>
      <p>Fetching...</p>
    </ng-template>
    <p *ngIf="auth | async; else fetching; let user">
        {{user.username }}
    </p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Hello, Angular';

  onUpdate(id, text) {
    this.mailService.update(id, text);
  }
  
  // auth: Observable<{}>;
  ngOnInit() {
  //  this.auth = Observable.of({ username: 'semlinker', password: 'segmentfault' })
  //   .delay(new Date(Date.now() + 2000)); 
  }

  constructor(
    @Inject('apiUrl') private apiUrl,
    private mailService: MailService) { }

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
  ngOnInit() {
    console.log('init')
    const timeout = ms => new Promise((resolve, reject) => {
      setTimeout(() => {
       resolve();
      }, ms);
     });
     
    const ajax1 = () => timeout(2000).then(() => {
     console.log('1');
     return 1;
    });
    
    const ajax2 = () => timeout(1000).then(() => {
     console.log('2');
     return 2;
    });

    const ajax3 = () => timeout(2000).then(() => {
     console.log('3');
     return 3;
    });
    const ajax4 = () => timeout(100).then(() => {
     console.log('4');
     return 4;
    });
    const ajax5 = () => timeout(600).then(() => {
     console.log('5');
     return 5;
    });
    
    const mergePromise = ajaxArray => {
      return new Promise((resolve, reject) => {
        let l = ajaxArray.length;
        let i = 0;
        let data = [];
        function eachPromise(P) {
         P.then(Pdata => {
           data.push(Pdata)
           if (i < l-1) {
             eachPromise(ajaxArray[++i]())
            } else {
              resolve(data)
            }
          })
        }
        eachPromise(ajaxArray[i]())
      })
    };

     mergePromise([ajax1, ajax2, ajax3, ajax4, ajax5]).then(data => {
      console.log('done');
      console.log(data); // data 为 [1, 2, 3]
     });
  }

}
