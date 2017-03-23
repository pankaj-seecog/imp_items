import { Component, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customevent',
  template: `
    <p>
      <button (click)="show()">Philips</button>
    </p>
  `,
  styles: [],
  outputs : ['clicked']
})
export class CustomeventComponent implements OnInit {


 clicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  
  show()
  {
  this.clicked.emit('Me Mohan here');
  }

}
