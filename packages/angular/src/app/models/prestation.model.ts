import { Facture } from './facture.model';

export class Prestation {
  numFacture: number;
  num: string;
  rubrique: string;
  base: string;
  taux: string;
  montant: string;
  typeRubrique: string; // La longueur maximale est de 1 caractère
  facture?: Facture; // La propriété est facultative car elle peut être null
}

