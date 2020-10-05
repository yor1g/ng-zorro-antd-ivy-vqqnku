import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input()
  mainForm: TemplateRef<any> | null;

  constructor() { }

  ngOnInit() {
  }

}