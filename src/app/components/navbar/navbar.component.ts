import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { MessageShareService } from 'src/app/service/message-share.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];

  constructor(private router: Router, private service: MessageShareService) { }
    
  ngOnInit() {
      this.items = [
          {
              label: 'Component One',
              icon: 'pi pi-pw pi-file',
              expanded: true,
              items: [
                { label: 'Screen One', icon: 'pi pi-fw', command: (event) => { this.goToComp1_Scr1(); } },
                { label: 'Screen Two', icon: 'pi pi-fw', command: (event) => { this.goToComp1_Scr2() } },
                { label: 'Screen Three', icon: 'pi pi-fw', command: (event) => { this.goToComp1_Scr3() } },
              ]
          },
          {  
            label: 'Component Two',
            icon: 'pi pi-pw pi-file',
            items: [
              { label: 'Screen One', icon: 'pi pi-fw', command: (event) => { this.goToComp2_Scr1(); } },
              { label: 'Screen Two', icon: 'pi pi-fw', command: (event) => { this.goToComp2_Scr2() } },
            ]
          },
          {
           
            label: 'Component Three',
            icon: 'pi pi-pw pi-file',
            items: [
              { label: 'Screen One', icon: 'pi pi-fw', command: (event) => { this.goToComp3_Scr1(); } },
            ]
          },
      ];
  }
  goToComp1_Scr1() {
    this.router.navigateByUrl('Component_One');
    this.service.goToSubMenu('CompOne_ScreenOne');
  }
  goToComp1_Scr2() {
    this.router.navigateByUrl('Component_One');
    this.service.goToSubMenu('CompOne_ScreenTwo');
  }
  goToComp1_Scr3() {
    this.router.navigateByUrl('Component_One');
    this.service.goToSubMenu('CompOne_ScreenThree');
  }
  goToComp2_Scr1() {
    this.router.navigateByUrl('Component_Two');
    this.service.goToSubMenu('CompTwo_ScreenOne');
  }
  goToComp2_Scr2() {
    this.router.navigateByUrl('Component_Two');
    this.service.goToSubMenu('CompTwo_ScreenTwo');
  }
  goToComp3_Scr1() {
    this.router.navigateByUrl('Component_Three');
     this.service.goToSubMenu('CompThree_ScreenThree');
   }
}
