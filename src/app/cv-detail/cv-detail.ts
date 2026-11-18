
import { Component, Input } from '@angular/core';
import { Cv } from '../models/cv';

@Component({
  selector: 'app-cv-detail',
  standalone: true,
  imports: [],
  templateUrl: './cv-detail.html',
  styleUrl: './cv-detail.css'
})
export class CvDetail {

  @Input() cv: Cv | null = null;

}
