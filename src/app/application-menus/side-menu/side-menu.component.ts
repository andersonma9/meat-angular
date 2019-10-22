import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"]
})
export class SideMenuComponent implements OnInit {
  @Input() opened: boolean;

  @Input() mode: string;

  constructor() {}

  ngOnInit() {}

  
}
