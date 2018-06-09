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


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  // templateUrl: './simple-form.component.html',
  template: `
    <p>
      simple-form Works!
    </p>
  `,
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
