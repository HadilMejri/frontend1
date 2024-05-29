import { Utilisateur } from './utilisateur.model';
import { Facture } from './facture.model';


export class Navire {
  nomNavire: string;
  utilisateurId: number;
  utilisateur?: Utilisateur; // La propriété est facultative car elle peut être null
  factures: Facture[]; // Ajoutez la propriété de navigation Factures ici
}


