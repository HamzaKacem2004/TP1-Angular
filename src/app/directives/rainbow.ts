
import {
  Directive,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: 'input[appRainbow]',
  standalone: true
})
export class Rainbow {

  @HostBinding('style.color')
  textColor: string = 'black';

  @HostBinding('style.borderColor')
  borderColor: string = 'black';

  generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  @HostListener('keyup')
  onKeyUp(): void {
    const randomColor = this.generateRandomColor();

    this.textColor = randomColor;
    this.borderColor = randomColor;
  }
}
