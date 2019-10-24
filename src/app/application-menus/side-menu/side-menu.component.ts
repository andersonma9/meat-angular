import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"]
})
export class SideMenuComponent implements OnInit {
  @Input() opened: boolean;

  @Input() mode: string;

  @Output() reflectOpened: EventEmitter<boolean> = new EventEmitter()

  constructor() {}

  ngOnInit() {
    
  }

  clickHandler() {
    // console.log(this.opened)
    if(this.opened === true) {
      this.opened = false;
      this.reflectOpened.emit(this.opened)
      console.log(this.opened)
    }
  }
}
