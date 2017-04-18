import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
@Component({
  selector: 'app-observablex',
  templateUrl: './observablex.component.html',
  styleUrls: ['./observablex.component.css']
})
export class ObservablexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  const myNumbers = Observable.interval(1000);
  myNumbers.subscribe(
  (number:number)=>{
  
  console.log(number)
  }
  );
  }

}