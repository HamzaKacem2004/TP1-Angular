
import { Routes } from '@angular/router';

import { Ttc } from './ttc/ttc';
import { ColorBox } from './color-box/color-box';
import { MiniWord } from './mini-word/mini-word';
import { CvTech } from './cv-tech/cv-tech';
import { RainbowDemo } from './rainbow-demo/rainbow-demo';
import { TodoComponent } from './todo/todo';

// Ajoute ici l'import de ton composant ColorBox
// selon le nom réel de son fichier et de sa classe.

export const routes: Routes = [

  {
    path: 'exercice1',
    component: ColorBox
  },

  {
    path: 'exercice2',
    component: Ttc
  },

  { 
    path: 'exercice3',
    component: CvTech 
  },

  {
    path: 'exercice4',
    component: MiniWord
  },

  { 
    path: 'exercice5', 
    component: RainbowDemo 

  },

  {
    path: 'exercice6',
    component: TodoComponent
  },

  {
    path: '',
    redirectTo: 'exercice1',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'exercice1'
  }

];
