import { Utilisateur } from './utilisateur.model';


export class Dossier {
  dossierNum: string;
  blNumero: number;
  utilisateurId: number;
  utilisateur?: Utilisateur; // La propriété est facultative car elle peut être null
}

