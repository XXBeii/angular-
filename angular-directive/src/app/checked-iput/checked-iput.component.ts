import { Component, OnInit } from '@angular/core';
import { CheckedServiceService } from '../checked-service.service'

@Component({
  selector: 'checked-iput',
  templateUrl: './checked-iput.component.html',
  styleUrls: ['./checked-iput.component.css']
})
export class CheckedIputComponent implements OnInit {
  private checkedTree = this.checkedInfo.checkedTree

  constructor(private checkedInfo: CheckedServiceService) { }

  ngOnInit() {
    console.log('checked-iput');
    console.log(this.checkedInfo.checkedTree)
  }
  
  consoleChecked(value) {
    console.log('consoleChecked', value)
  }

}
