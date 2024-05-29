import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prestation } from '../models/prestation.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private apiUrl = 'http://localhost:5184/api/prestations';

  constructor(private http: HttpClient) { }

  // Méthode pour créer une prestation
  createPrestation(prestation: Prestation): Observable<Prestation> {
    return this.http.post<Prestation>(this.apiUrl, prestation);
  }

  // Méthode pour récupérer une prestation
  getPrestation(numFacture: number, num: string): Observable<Prestation> {
    return this.http.get<Prestation>(`${this.apiUrl}/${numFacture}/${num}`);
  }

  // Méthode pour récupérer toutes les prestations
  getPrestations(): Observable<Prestation[]> {
    return this.http.get<Prestation[]>(this.apiUrl);
  }

  // Méthode pour mettre à jour une prestation
  updatePrestation(numFacture: number, num: string, prestation: Prestation): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${numFacture}/${num}`, prestation);
  }

  // Méthode pour supprimer une prestation
  deletePrestation(numFacture: number, num: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${numFacture}/${num}`);
  }
}
