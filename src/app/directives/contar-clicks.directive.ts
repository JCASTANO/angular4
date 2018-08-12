import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: 'li[appContarClicks]'
})
export class ContarClicksDirective {

  clickN = 1;

  @HostBinding('style.opacity') opacity: number = .5;

  @HostListener('click', ['$event.target']) onclick(btn) {
    console.log('a', btn, 'Número de clicks:', this.clickN++);
    this.opacity += .1;
  }

}
