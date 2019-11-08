import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NavigationInfoService } from 'src/app/services/navigation-info/navigation-info.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [
    trigger('loadingDissapeard', [
      transition(':leave', [
        style({
          opacity: 1
        }),
        animate('0.25s ease-in-out', style({
          opacity: 0
        }))
      ])
    ]),
  ]
})
export class LoadingComponent implements OnInit {

  constructor(private _navigationInfoService: NavigationInfoService) { }

  ngOnInit() {
  }

  navigationStatus() {
    return this._navigationInfoService.navStart;
  }

}
