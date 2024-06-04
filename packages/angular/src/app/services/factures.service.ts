import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facture } from '../models/facture.model';
import { Observable } from 'rxjs';
import { FactureDetails } from '../models/facturedetails.model';

@Injectable({
  providedIn: 'root'
})
export class FacturesService {
  private apiUrl = 'http://localhost:5184/api/factures';

  constructor(private http: HttpClient) { }

  // Méthode pour créer une facture
  createFacture(facture: Facture): Observable<Facture> {
    return this.http.post<Facture>(`${this.apiUrl}/addfac`, facture);
  }

  // Méthode pour récupérer toutes les factures
  getFactures(): Observable<Facture[]> {
    return this.http.get<Facture[]>(this.apiUrl);
  }

  // Méthode pour récupérer les détails d'une facture
  getFactureDetails(numeroFacture: number) {
    console.log("Here into service facture details", );

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };
    return this.http.get<FactureDetails>(`${this.apiUrl}/${numeroFacture}`);
 
  }

  // Méthode pour mettre à jour une facture
  updateFacture(id: number, facture: Facture): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/putfac/${id}`, facture);
  }

  // Méthode pour supprimer une facture
  deleteFacture(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deletefac/${id}`);
  }
}
