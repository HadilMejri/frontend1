import { Client } from './client.model';
import { Dossier } from './dossier.model';
import { Navire } from './navire.model';
import { Utilisateur } from './utilisateur.model';


export class Facture {
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
  dossierNum: string;
  nomNavire: string;
  utilisateurId: number;
  client?: Client; // La propriété est facultative car elle peut être null
  dossier?: Dossier; // La propriété est facultative car elle peut être null
  navire?: Navire; // La propriété est facultative car elle peut être null
  utilisateur?: Utilisateur; // La propriété est facultative car elle peut être null
}

