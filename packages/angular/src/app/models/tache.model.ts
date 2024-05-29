import { Utilisateur } from './utilisateur.model';

export class Tache {
  sujet: string;
  dateDebut: Date;
  dateFin: Date;
  statut: string;
  priorite: string;
  utilisateurId: number;
  utilisateur?: Utilisateur; // La propriété est facultative car elle peut être null
}

