import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dossier } from '../models/dossier.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DossiersService {
  private apiUrl = 'http://localhost:5184/api/dossiers';

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les dossiers
  getDossiers(): Observable<Dossier[]> {
    return this.http.get<Dossier[]>(this.apiUrl);
  }

  // Méthode pour récupérer un dossier par son numéro
  getDossier(dossierNum: string): Observable<Dossier> {
    return this.http.get<Dossier>(`${this.apiUrl}/${dossierNum}`);
  }

  // Méthode pour créer un nouveau dossier
  createDossier(dossier: Dossier): Observable<Dossier> {
    return this.http.post<Dossier>(this.apiUrl, dossier);
  }

  // Méthode pour mettre à jour un dossier existant
  updateDossier(dossierNum: string, dossier: Dossier): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${dossierNum}`, dossier);
  }

  // Méthode pour supprimer un dossier
  deleteDossier(dossierNum: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${dossierNum}`);
  }
}
