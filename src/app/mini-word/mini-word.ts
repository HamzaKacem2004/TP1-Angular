import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { Rainbow } from '../directives/rainbow';

@Component({
  selector: 'app-mini-word',
  standalone: true,
  imports: [FormsModule, NgStyle],
  templateUrl: './mini-word.html',
  styleUrl: './mini-word.css'
})
export class MiniWord {

  texte: string = 'Test';
  couleur: string = '#27853b';
  taille: number = 30;
  police: string = 'Arial';

  polices: string[] = [
    'Arial',
    'Georgia',
    'Times New Roman',
    'Courier New',
    'Verdana'
  ];

}
