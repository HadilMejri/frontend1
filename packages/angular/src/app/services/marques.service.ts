import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marque } from '../models/marque.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarquesService {
  private apiUrl = 'http://localhost:5184/api/marques';

  constructor(private http: HttpClient) { }

  // Méthode pour créer une marque
  createMarque(marque: Marque): Observable<Marque> {
    return this.http.post<Marque>(this.apiUrl, marque);
  }

  // Méthode pour récupérer toutes les marques
  getMarques(): Observable<Marque[]> {
    return this.http.get<Marque[]>(this.apiUrl);
  }

  // Méthode pour récupérer une marque
  getMarque(marqueCode: string): Observable<Marque> {
    return this.http.get<Marque>(`${this.apiUrl}/${marqueCode}`);
  }

  // Méthode pour mettre à jour une marque
  updateMarque(marqueCode: string, marque: Marque): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${marqueCode}`, marque);
  }

  // Méthode pour supprimer une marque
  deleteMarque(marqueCode: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${marqueCode}`);
  }
}
