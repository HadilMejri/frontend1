import { Navire } from './navire.model';
import { Facture } from './facture.model';

export class DestinationNavire {
  nomNavire: string;
  numFacture: number;
  provenance: string;
  dateDepart: Date;
  destination: string;
  navire?: Navire; // La propriété est facultative car elle peut être null
  facture?: Facture; // La propriété est facultative car elle peut être null
}


