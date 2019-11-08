import { Component, OnInit, ViewChild, NgZone, ChangeDetectorRef } from "@angular/core";
import { ResponsiveService } from "../responsive.service";
// import { SideMenuComponent } from "./side-menu/side-menu.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { LoginComponent } from "./login/login.component";
import { LoginService } from "../services/login/login.service";
import { HeaderService } from "../services/header.service";
import { NavigationInfoService } from '../services/navigation-info/navigation-info.service';


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
    private _cd: ChangeDetectorRef,
    public dialog: MatDialog,
    private _loginService: LoginService,
    private _headerService: HeaderService,
    private _navigationInfoService: NavigationInfoService
  ) { }

  ngOnInit() {
    if (
      localStorage.getItem("loggedUser") &&
      localStorage.getItem("userInfo")
    ) {
      this._loginService.loggedUser = JSON.parse(
        localStorage.getItem("loggedUser")
      );
      let token = "JWT " + this._loginService.loggedUser.token;
      this._headerService.httpOptions.headers = this._headerService.httpOptions.headers.set(
        "Authorization",
        token
      );
      this._loginService.userInfo = JSON.parse(
        localStorage.getItem("userInfo")
      );
    }

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

    this.opened = !this.opened;
    document.getElementById("side");

    this._cd.markForCheck()

  }

  reflectOpened() {
    this.opened = false;
  }

  abrirDialogoLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: "350px",
      data: { nome: "Anderson" }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  logout() {
    this._loginService.logout();
  }
}
