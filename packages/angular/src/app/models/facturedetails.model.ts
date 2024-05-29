import { LibelleMarchandise } from './libelle_marchandise.model';
import { Prestation } from './prestation.model';

export class FactureDetails {
  numFacture: number;
  date: Date;
  ville: string;
  pays: string;
  codeFiscal: string;
  codeClient: number;
  nomNavire: string;
  numPrestation: string;
  rubrique: string;
  base: string;
  taux: string;
  montant: string;
  typeRubrique: string;
  dossierNum: string;
  marqueCode: string;
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
