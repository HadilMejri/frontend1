import { Dossier } from './dossier.model';

export class Marque {
  marqueCode: string;
  dossierNum: string;
  dossier?: Dossier; // La propriété est facultative car elle peut être null
}

