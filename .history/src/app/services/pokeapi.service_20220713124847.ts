import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(private http: HttpClient) {}

  getAllPokemons() {
    return this.http
      .get('https://workshop-nestjs-pokeapi.vercel.app/pokemons')
      .subscribe();
  }
}
