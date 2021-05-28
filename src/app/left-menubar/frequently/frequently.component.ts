import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frequently',
  templateUrl: './frequently.component.html',
  styleUrls: ['./frequently.component.css']
})
export class FrequentlyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  frequently: any[] = [
    {
      "s_name": "Open Browser",
     "properties": "Triggers browser open action"
  }, {
      "s_name": "Close Browser",
     "properties": "Triggers browser close action"
  }, {
    "s_name": "Set SMPT",
    "properties": "Triggers browser close action"
  }
  ]

  allaction: any[] = [
    {
      "s_name": "Open Browser",
      "properties": "Triggers browser open action"
    },  {
      "s_name": "Close Browser",
      "properties": "Triggers browser close action"
    },  {
      "s_name": "Set SMPT",
      "properites": "Troggers browser close action"
    }

  ]

}
