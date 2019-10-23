import { Component, OnInit } from "@angular/core";
import { ResponsiveService } from "src/app/responsive.service";

@Component({
  selector: "app-detalhes",
  templateUrl: "./detalhes.component.html",
  styleUrls: ["./detalhes.component.scss"]
})
export class DetalhesComponent implements OnInit {
  constructor(private _responsiveService: ResponsiveService) {}

  centerCardTitle() {
    return !this._responsiveService
      .checkScreen(960)
      .subscribe(breakPoint => console.log(breakPoint.matches));
  }

  ngOnInit() {
    this.centerCardTitle();
  }
}
