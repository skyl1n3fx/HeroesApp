import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
// Environment de desarrollo
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl :string = environment.baseUrl;

  constructor(private http : HttpClient){ }

  getHeroes() : Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroeFindId(id:string):Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }

  getSugerencias(termino :string):Observable<Heroe[]>{
    const params = new HttpParams()
      .set('q',termino)
      .set('_limit',6);

    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`,{params});
  }

}
