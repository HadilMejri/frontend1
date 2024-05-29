import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Navire } from '../models/navire.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NaviresService {
  private apiUrl = 'http://localhost:5184/api/navires';

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les navires
  getNavires(): Observable<Navire[]> {
    return this.http.get<Navire[]>(this.apiUrl);
  }

  // Méthode pour récupérer un navire par son nom
  getNavire(nomNavire: string): Observable<Navire> {
    return this.http.get<Navire>(`${this.apiUrl}/${nomNavire}`);
  }

  // Méthode pour créer un nouveau navire
  createNavire(navire: Navire): Observable<Navire> {
    return this.http.post<Navire>(this.apiUrl, navire);
  }

  // Méthode pour mettre à jour un navire existant
  updateNavire(nomNavire: string, navire: Navire): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${nomNavire}`, navire);
  }

  // Méthode pour supprimer un navire
  deleteNavire(nomNavire: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${nomNavire}`);
  }
}
