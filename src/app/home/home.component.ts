import { Component, OnInit } from "@angular/core";

import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    trigger('homeAppeard', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: "TranslateY(200px)"
        }),
        animate('0.4s', style({
          opacity: 1,
          transform: 'TranslateY(0px)'
        }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  constructor() {}

  trigger: string;

  ngOnInit() {
    this.trigger = "homeNotReady";
    this.trigger = "ready";
  }
}
