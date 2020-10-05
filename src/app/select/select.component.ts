import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

listOfOption: Array<{ value: string; label: string }> = [];
  

  constructor() { }



  ngOnInit(): void {
    const children: string[] = [];
    for (let i = 10; i < 10000; i++) {
      children.push(`${i.toString(36)}${i}`);
    }
    this.listOfOption = children.map(item => {
      return {
        value: item,
        label: item
      };
    });
  }

}