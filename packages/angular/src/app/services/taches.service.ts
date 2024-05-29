import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tache } from '../models/tache.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TachesService {
  private apiUrl = 'http://localhost:5184/api/taches';

  constructor(private http: HttpClient) { }

  // Méthode pour créer une tâche
  createTache(tache: Tache): Observable<Tache> {
    return this.http.post<Tache>(this.apiUrl, tache);
  }

  // Méthode pour récupérer une tâche
  getTache(id: string): Observable<Tache> {
    return this.http.get<Tache>(`${this.apiUrl}/${id}`);
  }

  // Méthode pour récupérer toutes les tâches
  getTaches(): Observable<Tache[]> {
    return this.http.get<Tache[]>(this.apiUrl);
  }

  // Méthode pour mettre à jour une tâche
  updateTache(id: string, tache: Tache): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, tache);
  }

  // Méthode pour supprimer une tâche
  deleteTache(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
