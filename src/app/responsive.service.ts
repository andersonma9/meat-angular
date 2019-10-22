import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';



@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  

  constructor(private _breakpointObserver: BreakpointObserver) { }

  checkScreen(size) {
    return this._breakpointObserver.observe(`(min-width: ${size}px)`);
  }

}
