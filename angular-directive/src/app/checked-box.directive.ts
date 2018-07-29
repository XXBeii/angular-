import { Directive, OnInit, OnChanges, Input } from '@angular/core';
import { CheckedBox, CheckedBoxTree } from './checked-service.service';

@Directive({
  selector: '[checkedBox]'
})
export class CheckedBoxDirective implements OnInit, OnChanges {
  @Input('checkedBox') checkedItem: CheckedBoxTree;

  constructor() { }

  ngOnChanges() {
  }
  
  ngOnInit() {
    this.checkedItem.checked = this.checkedItem.child[0].checked
    console.log(this.checkedItem);
  }

}
