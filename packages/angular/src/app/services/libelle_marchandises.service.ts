import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LibelleMarchandise } from '../models/libelle_marchandise.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibelleMarchandisesService {
  private apiUrl = 'http://localhost:5184/api/libellemarchandises';

  constructor(private http: HttpClient) { }

  // Méthode pour créer une libellé marchandise
  createLibelleMarchandise(libelleMarchandise: LibelleMarchandise): Observable<LibelleMarchandise> {
    return this.http.post<LibelleMarchandise>(this.apiUrl, libelleMarchandise);
  }

  // Méthode pour récupérer une libellé marchandise
  getLibelleMarchandise(designation: string, marqueCode: string): Observable<LibelleMarchandise> {
    return this.http.get<LibelleMarchandise>(`${this.apiUrl}/${designation}/${marqueCode}`);
  }

  // Méthode pour récupérer toutes les libellés marchandises
  getLibelleMarchandises(): Observable<LibelleMarchandise[]> {
    return this.http.get<LibelleMarchandise[]>(this.apiUrl);
  }

  // Méthode pour mettre à jour une libellé marchandise
  updateLibelleMarchandise(designation: string, marqueCode: string, libelleMarchandise: LibelleMarchandise): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${designation}/${marqueCode}`, libelleMarchandise);
  }

  // Méthode pour supprimer une libellé marchandise
  deleteLibelleMarchandise(designation: string, marqueCode: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${designation}/${marqueCode}`);
  }
}
