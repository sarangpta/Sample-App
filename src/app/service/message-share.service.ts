import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageShareService {

  constructor() { }

  private subMenu = new BehaviorSubject<string>('CompOne_ScreenOne');
  currentMenu = this.subMenu.asObservable();

  goToSubMenu(path: string) {
    this.subMenu.next(path);
  }
}
