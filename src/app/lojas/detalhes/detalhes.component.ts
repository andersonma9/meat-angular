import { Component, OnInit } from "@angular/core";
import { ResponsiveService } from "src/app/responsive.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detalhes",
  templateUrl: "./detalhes.component.html",
  styleUrls: ["./detalhes.component.scss"]
})
export class DetalhesComponent implements OnInit {
  constructor(
    private _responsiveService: ResponsiveService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  idLoja;

  centerCardTitle() {
    return !this._responsiveService
      .checkScreen(960)
      .subscribe(breakPoint => console.log(breakPoint.matches));
  }

  ngOnInit() {
    // this.centerCardTitle();
    // console.log(this._router)
    // console.log(this._activatedRoute.snapshot.params)
  }

  setLoja() {
    return this._activatedRoute.snapshot.params;
  }
}
