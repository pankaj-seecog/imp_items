import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-binding',
  template: `
    <h1>Directive binding</h1>
    <div [ngClass]="{myClass : true}">Value is here</div>
  `,
  styles: `
  myClass {
  color : red
  }
  
  `
})
export class DirectiveBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
