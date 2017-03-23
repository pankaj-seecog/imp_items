import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `  
  <div [ngClass]="{myClass : true}">All is well</div>
  <div [ngStyle]="{color : 'blue'}">second elemnt </div>
  <ul>
  <li *ngFor="let product of products">{{product}}</li>
  </ul>
  <p>
  <app-eventbinding></app-eventbinding>
  </p>
  <p>
  <app-externalbinding [contact]="9730232815" first_name="Mohan" last_name="kumar" email="mohan@gmail.com" city="Madhya Pradesh"></app-externalbinding>
  </p>
  <p>
  <app-customevent (clicked)="again($event)"></app-customevent>
  </p>
  `,
  styles: [`
  .myClass {
  color : red
  }
  `]
})
export class AppComponent {
  title = 'app works !';
  products = ['Apple','Banana','PineApple'];
  again(value:string)
  {
  alert('The value is '+value)
  }
}
