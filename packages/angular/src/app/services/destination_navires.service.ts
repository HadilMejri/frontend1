import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DestinationNavire } from '../models/destination_navire.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationNaviresService {
  private apiUrl = 'http://localhost:5184/api/destinationnavires';

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer toutes les destinations de navires
  getDestinationNavires(): Observable<DestinationNavire[]> {
    return this.http.get<DestinationNavire[]>(this.apiUrl);
  }

  // Méthode pour récupérer une destination de navire par son numéro de facture et son nom de navire
  getDestinationNavire(numFacture: number, nomNavire: string): Observable<DestinationNavire> {
    return this.http.get<DestinationNavire>(`${this.apiUrl}/${numFacture}/${nomNavire}`);
  }

  // Méthode pour créer une nouvelle destination de navire
  createDestinationNavire(destinationNavire: DestinationNavire): Observable<DestinationNavire> {
    return this.http.post<DestinationNavire>(this.apiUrl, destinationNavire);
  }

  // Méthode pour mettre à jour une destination de navire existante
  updateDestinationNavire(numFacture: number, nomNavire: string, destinationNavire: DestinationNavire): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${numFacture}/${nomNavire}`, destinationNavire);
  }

  // Méthode pour supprimer une destination de navire
  deleteDestinationNavire(numFacture: number, nomNavire: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${numFacture}/${nomNavire}`);
  }
}
