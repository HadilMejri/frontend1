import { Marque } from './marque.model';

export class LibelleMarchandise {
  designation: string;
  marqueCode: string;
  colMtg: string;
  poids: number;
  marque?: Marque; // La propriété est facultative car elle peut être null

  // Méthode pour convertir la valeur Poids en float
  getPoidsAsFloat(): number {
    return parseFloat(this.poids.toString());
  }
}
