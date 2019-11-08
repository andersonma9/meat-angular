import { Injectable } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationInfoService {

  private previousUrl: string;
  private currentUrl: string;

  navStart: boolean = false;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        // console.log(event)
        this.navStart = true;
      }
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.navStart = false;    
        }, 2000);
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      };
    });
  }

  public getPreviousUrl() {
    return this.previousUrl;
  }   

  public navigationStatus() {
    return this.navStart;
  }
}
