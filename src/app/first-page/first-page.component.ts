import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  title:string="I'm an alert!"
  alerts:any = [];

  constructor() { }

  ngOnInit() {
  }


  public add(type:string): void {
    this.alerts.push({
      type: type,
      msg: "I'm a timed alert!",
      timeout: 5000
    });
  }

  public selected:string;
  public list:string[] = [
    'Item1','Item2','Item3','Item4','Item6','Item7','Item8','Item9'
  ];


}
