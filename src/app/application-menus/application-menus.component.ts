import { Component, OnInit, ViewChild } from "@angular/core";
import { ResponsiveService } from "../responsive.service";
import { SideMenuComponent } from "./side-menu/side-menu.component";

@Component({
  selector: "app-application-menus",
  templateUrl: "./application-menus.component.html",
  styleUrls: ["./application-menus.component.scss"]
})
export class ApplicationMenusComponent implements OnInit {
  smallScreen;
  mediumScreen;
  largeScreen;
  xLargeScreen;

  opened: boolean = true;
  mode: string = 'side';

  // tslint:disable-next-line: variable-name
  constructor(
    private _responsiveService: ResponsiveService,
    private _sideMenuComponent: SideMenuComponent
  ) {}

  ngOnInit() {
    this._responsiveService.checkScreen(600).subscribe(breakpoint => {
      this.smallScreen = breakpoint.matches;
      if (!this.smallScreen) {
        this.opened = false;
        this.mode = 'over';
      }
    });

    this._responsiveService.checkScreen(960).subscribe(breakpoint => {
      this.mediumScreen = breakpoint.matches;
      if (!this.mediumScreen) {
        this.opened = false;
        this.mode = 'over'
      } else if (this.mediumScreen) {
        this.opened = true;
        this.mode = 'side'
      }
    });

    this._responsiveService.checkScreen(1280).subscribe(breakpoint => {
      this.largeScreen = breakpoint.matches;
      if (this.largeScreen) {
        this.opened = true;
        this.mode = 'side';
      }
    });

    this._responsiveService.checkScreen(1920).subscribe(breakpoint => {
      this.xLargeScreen = breakpoint.matches;
      if (this.xLargeScreen) {
        this.opened = true;
        this.mode = 'side';
      }
    });
  }

  sideContentToggle() {
    this.opened = !this.opened;
  }
}
