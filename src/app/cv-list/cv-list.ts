
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Cv } from '../models/cv';

@Component({
  selector: 'app-cv-list',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './cv-list.html',
  styleUrl: './cv-list.css'
})
export class CvList {

  // Reçoit la liste des CVs depuis le parent
  @Input() cvs: Cv[] = [];

  // Envoie le CV sélectionné vers le parent
  @Output() cvSelected = new EventEmitter<Cv>();

  selectCv(cv: Cv): void {
    this.cvSelected.emit(cv);
  }
}
