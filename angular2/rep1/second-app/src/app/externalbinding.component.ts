import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-externalbinding',
  template: `
    <p>
      Contact {{contact}}
    </p>
    <p>
    First Name : {{first_name}}
    </p>
    <p>
    Last Name : {{last_name}}
    </p>
    <p>
    Email : {{email}}
    </p>
    <p>
    City : {{city}}
    </p>   
  `,
  styles: [`
  p{
  color : green
  }
  `]
})
export class ExternalbindingComponent implements OnInit {

@Input() contact : number;
@Input() first_name : String;
@Input() last_name : String;
@Input() email : String;
@Input() city : String;


  constructor() { }

  ngOnInit() {
  }

}
