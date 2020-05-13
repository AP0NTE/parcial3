import { Injectable, Inject } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Persona } from '../models/persona';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string )
  { 
  }
  /** POST: add a new task to the server */
  add(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.baseUrl+'api/Persona', persona, httpOptions).pipe(
      tap((newPersona: Persona) => this.log(`Persona agregado id= ${newPersona.id}`)),
      catchError(this.handleErrorAdd<Persona>('Error Al Agregar Persona'))
    )
  }

  /** GET Task from the server */
  getAll():Observable<Persona[]>
  {
    return this.http.get<Persona[]>(this.baseUrl+'api/Persona').pipe(
    tap(/*=>this.log('Se Consulta la información')*/),
    catchError(this.handleError<Persona[]>('getAll',[]))
    );
  }
        /** GET task by id. Will 404 if id not found */
        get(id: number): Observable<Persona>
        {
          const url = `${this.baseUrl + 'api/Persona'}/${id}`;
          return this.http.get<Persona>(url).pipe(
          tap(_ => this.log(`fetched persona id=${id}`)),
          catchError(this.handleError<Persona>(`getPersona id=${id}`))
          );
        }
  
        /** PUT: update the Task on the server */
      update (persona: Persona): Observable<any> {
        const url =`${this.baseUrl + 'api/Persona'}/${persona.id}`;
        return this.http.put(url, persona, httpOptions).pipe(
        tap(_ => this.log(`updated persona identificacion=${persona.id}`)),
        catchError(this.handleError<any>('persona'))
        );
      }
  
      /** DELETE: delete the task from the server */
      delete (persona: Persona | number): Observable<Persona> {
        const id = typeof persona === 'number' ? persona : persona.id;
        const url =`${this.baseUrl + 'api/Persona'}/${id}`;
        
        return this.http.delete<Persona>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted persona id=${id}`)),
        catchError(this.handleError<Persona>('deletepersona'))
        );
      }
  

  private handleErrorAdd<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    this.log('Rellene Los Campos Requeridos  * ');
    return of(result as T);
    };
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    alert(`PersonaService: ${message}`);
  
}
}