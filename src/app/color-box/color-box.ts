
import { Component } from '@angular/core';

@Component({
  selector: 'app-color-box',
  standalone: true,
  imports: [],
  templateUrl: './color-box.html',
  styleUrl: './color-box.css'
})
export class ColorBox {

  defaultColor: string = 'lightblue';

  currentColor: string = this.defaultColor;

  changeColor(color: string) {
    this.currentColor = color;
  }

  resetColor() {
    this.currentColor = this.defaultColor;
  }

}