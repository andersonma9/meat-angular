import { Component, OnInit, ViewChild, NgZone } from "@angular/core";
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

  opened: boolean;
  mode: string = "over";

  // tslint:disable-next-line: variable-name
  constructor(
    private _responsiveService: ResponsiveService,
    private _zone: NgZone
  ) {}

  ngOnInit() {
    this.opened = false;
    this._responsiveService.checkScreen(600).subscribe(breakpoint => {
      this.smallScreen = breakpoint.matches;
      if (!this.smallScreen) {
        this.opened = false;
        // this.mode = 'over';
      }
    });

    this._responsiveService.checkScreen(960).subscribe(breakpoint => {
      this.mediumScreen = breakpoint.matches;
      if (!this.mediumScreen) {
        this.opened = false;
        // this.mode = 'over'
      } else if (this.mediumScreen && this.opened == true) {
        this.opened = !this.opened;
        // this.mode = 'over'
      }
    });

    this._responsiveService.checkScreen(1280).subscribe(breakpoint => {
      this.largeScreen = breakpoint.matches;
      if (this.largeScreen) {
        // this.mode = 'over';
      }
    });

    this._responsiveService.checkScreen(1920).subscribe(breakpoint => {
      this.xLargeScreen = breakpoint.matches;
      if (this.xLargeScreen) {
        // this.mode = 'over';
      }
    });
  }
  

  sideContentToggle() {
    this._zone.run(() => {
      this.opened = !this.opened;
      document.getElementById('side')
    });
  }

  reflectOpened() {
    this.opened = false;
  }

}
