import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  template: `

 <ng-container *ngIf="true">
<app-test></app-test>
    </ng-container>
  `
})
export class AppComponent {}

