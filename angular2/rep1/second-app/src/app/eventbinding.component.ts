import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  template: `
    <button (click)="check()">Click Here</button>
  `,
  styles: [``]
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  check(){
  alert('Check for us')
  }

}
