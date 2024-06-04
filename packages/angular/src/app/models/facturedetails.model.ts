import { LibelleMarchandise } from './libelle_marchandise.model';
import { Prestation } from './prestation.model';

export class FactureDetails {
  numFacture: number;
  date: Date;
  ville: string;
  pays: string;
  avanceEuro: string;
  destinationEuro: string;
  avanceMillime: string;
  destinationMillime: string;
  codeFiscal: string;
  codeClient: number;
  nomNavire: string;
  num: string;
  rubrique: string;
  base: string;
  taux: string;
  montant: string;
  typeRubrique: string;
  dossierNum: string;
  marqueCode: string;
  BLNumero: number;
  designation: string;
  colMtg: string;
  poids: number;
  provenance: string;
  dateDepart: Date;
  destination: string;
  libelleMarchandises: LibelleMarchandise[]; // Ajoutez cette ligne
  prestations: Prestation[]; // Ajoutez cette ligne

  // Méthode pour convertir le poids en float
  getPoidsAsFloat(): number {
    return parseFloat(this.poids.toString());
  }
}
