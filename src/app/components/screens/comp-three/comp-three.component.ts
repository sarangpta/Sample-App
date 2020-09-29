import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MessageShareService } from 'src/app/service/message-share.service';

@Component({
  selector: 'app-comp-three',
  templateUrl: './comp-three.component.html',
  styleUrls: ['./comp-three.component.scss']
})
export class CompThreeComponent implements OnInit {
  routerSubscription: Subscription;
  subMenu: string;
  constructor(private service: MessageShareService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }

  ngOnInit(): void {
    this.service.currentMenu.subscribe(message => {
      this.subMenu = message;
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

}
