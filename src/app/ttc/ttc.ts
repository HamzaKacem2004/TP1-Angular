
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-ttc',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './ttc.html',
  styleUrl: './ttc.css'
})
export class Ttc {

  quantite: number = 1;
  prixUnitaire: number = 0;
  tva: number = 18;

  get totalHT(): number {
    return this.quantite * this.prixUnitaire;
  }

  get tauxRemise(): number {
    if (this.quantite >= 10 && this.quantite <= 15) {
      return 20;
    }

    if (this.quantite > 15) {
      return 30;
    }

    return 0;
  }

  get montantRemise(): number {
    return this.totalHT * this.tauxRemise / 100;
  }

  get totalHTNet(): number {
    return this.totalHT - this.montantRemise;
  }

  get montantTVA(): number {
    return this.totalHTNet * this.tva / 100;
  }

  get totalTTC(): number {
    return this.totalHTNet + this.montantTVA;
  }
}
