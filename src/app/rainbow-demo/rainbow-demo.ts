
import { Component } from '@angular/core';
import { Rainbow } from '../directives/rainbow';

@Component({
  selector: 'app-rainbow-demo',
  standalone: true,
  imports: [Rainbow],
  templateUrl: './rainbow-demo.html',
  styleUrl: './rainbow-demo.css'
})
export class RainbowDemo {

}
