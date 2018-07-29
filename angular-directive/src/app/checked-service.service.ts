import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckedServiceService {
  message: string  ='复选框树';
  checkedTree:CheckedBoxTree[] = [];
  constructor() {
    for (let i =3; i--;) {
      this.checkedTree.push({
        name: 3 - i,
        checked: false,
        child: []
      })
    }
    this.checkedTree.forEach(item => {
      for (let i = 4; i--;) {
        item.child.push({
          name: 4 - i,
          checked: false
        })
      }
    })
  }
  
}

export interface CheckedBoxTree{
  name: number,
  checked: boolean,
  child: CheckedBox[]
}
export interface CheckedBox{
  name: number,
  checked: boolean
}