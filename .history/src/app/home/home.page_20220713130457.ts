import { Component, OnInit } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  constructor(
    private data: DataService,
    private pokeApiService: PokeapiService
  ) {}

  ngOnInit(): void {
    this.pokeApiService.getAllPokemons().subscribe((res: any) => {
      this.pokemons = res.results;
    });
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }
}
