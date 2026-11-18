
import { Component } from '@angular/core';
import { Cv } from '../models/cv';
import { CvList } from '../cv-list/cv-list';
import { CvDetail } from '../cv-detail/cv-detail';

@Component({
  selector: 'app-cv-tech',
  standalone: true,
  imports: [CvList, CvDetail],
  templateUrl: './cv-tech.html',
  styleUrl: './cv-tech.css'
})
export class CvTech {

  cvs: Cv[] = [
    {
      id: 1,
      name: 'Ben Salem',
      firstname: 'Sami',
      age: 24,
      cin: '11223344',
      job: 'Développeur Web',
      path: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Trabelsi',
      firstname: 'Lina',
      age: 26,
      cin: '22334455',
      job: 'UI/UX Designer',
      path: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Mansour',
      firstname: 'Youssef',
      age: 28,
      cin: '33445566',
      job: 'Administrateur Réseaux',
      path: 'https://randomuser.me/api/portraits/men/65.jpg'
    }
  ];

  selectedCv: Cv | null = null;

  onCvSelected(cv: Cv): void {
    this.selectedCv = cv;
  }
  resetDetails(): void {
    this.selectedCv = null;
}
}
