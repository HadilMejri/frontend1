import { Utilisateur } from './utilisateur.model';

export class Client {
  codeClient: number;
  nomClient: string;
  adresseClient: string;
  utilisateurId: number;
  utilisateur?: Utilisateur; // La propriété est facultative car elle peut être null
}
